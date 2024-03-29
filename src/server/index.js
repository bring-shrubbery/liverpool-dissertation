// Base Imports
import path from "path";
import fs from "fs";

// React SSR
import React from "react";
import { renderToString } from "react-dom/server";
import ProjectManager from "../projectManager/components/ProjectManagerView/ProjectManagerView.jsx";

// Server Setup
import express from "express";
import morgan from "morgan";
const app = express();

// Middleware
import bodyParser from "body-parser";
import compression from "compression";

// Data Parsing
import { renderSignals } from "./renderer";
// import testModel from './testModel.json'

// Library nodes
import libraryNodes from "./libraryNodes.json";

// Project presets
import modulation from "./project_presets/modulation.json";
import fourierSeries from "./project_presets/fourierSeries.json";
import autoCorrelation from "./project_presets/autoCorrelation.json";
import crossCorrelation from "./project_presets/crossCorrelation.json";
import convolution from "./project_presets/convolution.json";
import amDemodulation from "./project_presets/amDemodulation.json";

let database = {
  projectsInfo: [
    {
      projectId: "1",
      title: "AM/FM Modulation",
      description:
        "Shows one signal modulated over other (carrier) signal using AM and FM modulation.",
      owner: "admin",
    },
    {
      projectId: "2",
      title: "Fourier Series",
      description: "Attempt at creating fourier series using this tool.",
      owner: "admin",
    },
    {
      projectId: "3",
      title: "Cross-Correlation",
      description: "Cross-Correlation implementation",
      owner: "admin",
    },
    {
      projectId: "4",
      title: "Auto-Correlation",
      description: "Auto-Correlation implementation",
      owner: "admin",
    },
    {
      projectId: "5",
      title: "Convolution",
      description: "Convolution implementation",
      owner: "admin",
    },
    {
      projectId: "6",
      title: "AM Demodulation",
      description: "AM demodulation implementation",
      owner: "admin",
    },
  ],
  projectModels: [
    { ...modulation },
    { ...fourierSeries },
    { ...crossCorrelation },
    { ...autoCorrelation },
    { ...convolution },
    { ...amDemodulation },
  ],
  users: {
    admin: {
      username: "admin",
      password: "admin",
    },
  },
  newProject: function (username, title, description) {
    // Find new id
    let newId = 0;

    for (let i in this.projectsInfo) {
      if (parseInt(this.projectsInfo[i].projectId) > newId)
        newId = this.projectsInfo[i].projectId;
    }

    newId++;

    // Add new projecy info
    this.projectsInfo.push({
      projectId: newId,
      title: title,
      description: description,
      owner: username,
    });

    this.projectModels.push({
      ...projectModelTemplate,
    });

    return newId;
  },
  saveProject: function (projectId, json) {
    const newProjectVersion = {
      allConnections: json.allConnections,
      allNodes: json.allNodes,
      composerCoordinates: json.composerCoordinates,
      isCreatingConnection: json.composerCoordinates,
    };

    this.projectModels[projectId - 1] = newProjectVersion;
  },
  newUser: function (username, password) {
    this.users[username] = {
      username: username,
      password: password,
    };
  },
};

const projectModelTemplate = {
  allConnections: [],
  allNodes: {},
  composerCoordinates: {
    focused: true,
    gridSize: 50,
    height: 1,
    width: 1,
    x: 0,
    y: 0,
    zoomLevel: 1,
  },
  isCreatingConnection: false,
};

// Static files
app.use(express.static(__dirname + "/public/static"));

// Logging
app.use(morgan("tiny"));

// JSON parsing
app.use(bodyParser.json());

// Compression
app.use(compression());

// --- ROUTES ---
app.get("/editor/:username/:id", (req, res) => {
  const projectId = req.params.id;
  const username = req.params.username;

  if (!database.users[username])
    res.status(420).send("User with username " + username + " doesn't exist");

  fs.readFile(
    path.resolve(__dirname, "./public/editor.html"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }

      let projectData;

      for (let i = 0; i < database.projectsInfo.length; i++) {
        const project = database.projectsInfo[i];

        if (project.owner == username && project.projectId == projectId) {
          let pid = parseInt(projectId) - 1;
          projectData = {
            ...database.projectModels[pid],
            pid: projectId,
            owner: username,
            title: project.title,
          };
          break;
        }
      }

      // Set title
      data = data.replace(
        "<title></title>",
        `<title>${projectData.title}</title>`
      );

      // Set data
      data = data.replace(
        '<script id="editor-data"></script>',
        `<script id="project-data">document.projectData = ${JSON.stringify(
          projectData
        )}</script>
            <script id="library-data">document.libraryNodes = ${JSON.stringify(
              libraryNodes
            )}</script>`
      );

      res.setHeader("Content-Type", "text/html");
      res.send(data);
    }
  );
});

// Default test visualisation
app.get("/render/:username/:id", (req, res) => {
  const projectId = req.params.id;
  const username = req.params.username;

  if (!database.users[username])
    res.status(420).send("User with username " + username + " doesn't exist");

  const renderedString = renderSignals(database.projectModels[projectId - 1]);

  res.setHeader("Content-Type", "text/html");
  res.end(renderedString);
});

// For now, landing page is the projects page.
app.get("/projects/:username", (req, res) => {
  const username = req.params.username;

  fs.readFile(
    path.resolve(__dirname, "./public/projects.html"),
    "utf8",
    (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred");
      }

      // Set title
      data = data.replace("<title></title>", `<title>Projects</title>`);

      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  );
});

app.get("/projects/info/:username", (req, res) => {
  const username = req.params.username;

  if (database.users[username]) {
    let projectsArray = [];
    for (let i = 0; i < database.projectsInfo.length; i++) {
      if (database.projectsInfo[i].owner === username)
        projectsArray.push(database.projectsInfo[i]);
    }

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(projectsArray));
  } else {
    res.status(420).send(`No user with username "${username}" was found.`);
  }
});

app.post("/save/:username/:id", function (req, res) {
  // Save existing project
  const username = req.params.username;
  const projectId = req.params.id;

  const projectJson = req.body;

  if (!database.users[username])
    res.status(420).send(`User with username ${username} doesn't exist`);

  if (!database.projectModels[projectId - 1])
    res.status(421).send(`Project with id ${projectId} doesn't exist`);

  database.saveProject(projectId, projectJson);

  res.status(200).end();
});

app.get("/createProject/:username/:title/:description", (req, res) => {
  const username = req.params.username;
  const title = req.params.title;
  const description = req.params.description;

  if (!database.users[username])
    res.status(420).send(`User with username ${username} doesn't exist`);

  let pid = database.newProject(username, title, description);

  res.status(301).send(`/editor/${username}/${pid}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./build/public/landing.html"));
});

app.get("/register/:username/:password", (req, res) => {
  const username = req.params.username;
  const password = req.params.password;

  database.newUser(username, password);

  res.sendStatus(200);
});

// Run server
// Either get port number from environment variables or set it to a default 5555
const port = process.env.PORT || 5555;
// Start listening
app.listen(port, () => {
  console.log("\nListening on: http://localhost:" + port + "/\n");
});
