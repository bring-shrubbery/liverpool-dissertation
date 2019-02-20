// Base Imports
import path from 'path'
import fs from 'fs'

// Server Setup
import express from 'express'
const app = express()

// Middleware
import bodyParser from 'body-parser'

// Data Parsing
import {
    renderSignals
} from './renderer'
import testModel from './testModel.json'

const dateNow = () => String(Date().toString()).substr(0, 24) + "\t| \t"

// Static files
app.use(express.static(__dirname + '/public'))

// --- ROUTES ---
app.get('/editor/:id', (req, res) => {
    const projectId = req.params.id;
    console.log(dateNow() + " Requested to edit project " + projectId);
    
    fs.readFile(path.resolve(__dirname, './public/editor/editor.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return res.status(500).send('An error occurred')
        }

        // Set title
        data = data.replace(
            "<title></title>",
            `<title>${projectId}</title>`
        )

        // Set data
        data = data.replace(
            '<script id="editor-data"></script>',
            `<script id="editor-data">document.editorData = ${JSON.stringify(testModel)}</script>`
        )

        res.setHeader('Content-Type', 'text/html');
        res.send(data);
    })
});

app.get('/projects', (req, res) => {
    // TODO: return page with all the projects for the current user
    res.end("projects");
});

// JSON Parser
app.post('/render', bodyParser.json());

app.post('/render', (req, res) => {
    console.log(dateNow() + "POST /RENDER route requested");

    const reqJson = req.params.body;
    const renderedString = renderSignals(reqJson);

    res.setHeader('Content-Type', 'text/plain');
    res.end(renderedString);
});

// Default test visualisation
app.get('/render', (req, res) => {
    console.log(dateNow() + " GET /RENDER route requested");

    const renderedString = renderSignals(testModel);

    res.setHeader('Content-Type', 'text/html');
    res.end(renderedString);
})

app.get("/", (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end("<ul><li><a href='/projects'>projects</a></li><li><a href='/render'>render</a></li><li><a href='/editor/projectid'>editor</a></li></ul>");
})

// Run server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("\nListening on: https://localhost:"+port+"\n");
});