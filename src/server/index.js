// Base Imports
import path from 'path'
import fs from 'fs'

// Server Setup
import express from 'express'
const app = express()

// Middleware
// import bodyParser from 'body-parser'

// Data Parsing
import {
    renderSignals
} from './renderer'
// import testModel from './testModel.json'

// Pre-made projects and library nodes
import libraryNodes from './libraryNodes.json'
import modulation from './projects/modulation.json'

const dateNow = () => String(Date().toString()).substr(0, 24) + " | ";

let database = {
    projectsInfo: [
        {
            projectId: "1",
            title: "AM/FM Modulation",
            description: "Shows one signal modulated over other (carrier) signal using AM and FM modulation.",
            owner: "admin"
        }
    ],
    projectModels: [
        modulation
    ],
    users: {
        admin: {
            username: "admin",
            password: "admin"
        }
    }
}

// Static files
app.use(express.static(__dirname + '/public/static'))

// --- ROUTES ---
app.get('/editor/:username/:id', (req, res) => {
    const projectId = req.params.id;
    const username = req.params.username;

    console.log(`${dateNow()}GET /editor/${username}/${projectId}`);

    if(!database.users[username]) res.status(420).send("User with username "+username+" doesn't exist");
    
    fs.readFile(path.resolve(__dirname, './public/editor.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }

        // Set title
        data = data.replace(
            "<title></title>",
            `<title>${projectId}</title>`
        )

        let projectData;
        for(let i = 0; i < database.projectsInfo.length; i++) {
            const project = database.projectsInfo[i];
            
            if(project.owner == username && project.projectId == projectId) {
                let pid = parseInt(projectId) - 1;
                projectData = {
                    ...database.projectModels[pid],
                    pid: projectId,
                    owner: username
                }
            }
        }

        // Set data
        data = data.replace(
            '<script id="editor-data"></script>',
            `<script id="editor-data">document.projectData = ${JSON.stringify(projectData)}</script>
            <script id="editor-data">document.libraryNodes = ${JSON.stringify(libraryNodes)}</script>`
        )

        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    })
});

// Default test visualisation
app.get('/render/:username/:id', (req, res) => {
    const projectId = req.params.id;
    const username = req.params.username;
    console.log(`${dateNow()}GET /render/${username}/${projectId}`);

    if(!database.users[username]) res.status(420).send("User with username "+username+" doesn't exist");


    const renderedString = renderSignals(database.projectModels[projectId - 1]);

    res.setHeader('Content-Type', 'text/html');
    res.end(renderedString);
})

// For now, landing page is the projects page.
app.get("/", (req, res) => {
    fs.readFile(path.resolve(__dirname, './public/projects.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }

        // Set title
        data = data.replace(
            "<title></title>",
            `<title>Projects</title>`
        )

        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    })
})

app.get("/projects/info/:username", (req, res) => {
    const username = req.params.username;

    if(database.users[username]) {
        let projectsArray = [];
        for(let i = 0; i < database.projectsInfo.length; i++) {
            if(database.projectsInfo[i].owner === username)
                projectsArray.push(database.projectsInfo[i]);
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(projectsArray));
    } else {
        res.status(420).send(`No user with username "${username}" was found.`);
    }
    
})

app.post("/save/:username/:id", (req, res) => {
    // Save existing project
})


app.post("/createProject/:username", (req, res) => {
    // Create new project
})

// Run server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("\nListening on: https://localhost:"+port+"\n");
});


var signalGenerator3sine = function(time) {
    return (signalGenerator3amplitude(time)
        *Math.sin(
            (
                2
                *Math.PI
                *signalGenerator3frequency(time)
                *time
            )
            +signalGenerator3phase(time)
        )
    )+signalGenerator3offset(time)};
