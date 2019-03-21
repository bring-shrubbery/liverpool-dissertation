# Tools used

To understand how this project is made you'll have to be familiar with certain technologies. If you're not familiar with at least one of the tools from "Main tools" or "JS frameworks used" lists you should go on their website and learn them. All these tools are documented very well. The list should be complete, but with updates it might start to slack off, so we encourage you to contribute to the wiki to keep it up to date.

**Main tools:**

1. [JavaScript](https://en.wikipedia.org/wiki/JavaScript) - The main language of this project. ES6 syntax is encouraged in this project for development simplicity. ES6 syntax is transpiled into ES6 upon compilation. Knowledge of JavaScript also assumes you're familiar with JSON syntax.
2. [TypeScript](https://www.typescriptlang.org/) - Second main programming language of this project. It is extremely similar to the JavaScript but is more type strict. This improves productivity by a significant margin. Eventually, the whole project should use it.
3. [HTML](https://www.w3schools.com/html/) and [CSS](https://www.w3schools.com/css/) - Markup and styling languages used to contruct browser [DOM (Document Object Model)](https://en.wikipedia.org/wiki/Document_Object_Model) and then stylize it. Acutally, [SASS](https://sass-lang.com/) is used for the styling, but you have to know CSS to use SASS.
4. [Node.js](https://nodejs.org/en/) - The core of the project. Both development and deployment depent upon Node.js. It is a JavaScript engine which allows to run JavaScript core on the server side.
5. [NPM](https://www.npmjs.com/) - NPM is used as a Node.js package manager for this project. Later it might be switched to Yarn, but until then you will have to use NPM.

**JavaScript frameworks used**

1. [React.js](https://reactjs.org/) - React is used for managing the front end of the tool. Editor is completely made using React. Projects manager and other pages (Except for the Renderer) use react too, but do rely on Material UI framwork.
2. [Redux](https://redux.js.org/) - Manages state of the editor. Since the editor is a very complex app, it would be hard to view and update data in certain sections of the app. Redux helps significantly in simplifying the state management.
3. [Webpack](https://webpack.js.org/) - a javascript file bundler. Used for better code splitting. Several configuration files are used for different pages in `/config/webpack/` directory.
4. [Babel](https://babeljs.io/) - Transpiles ES6 JavaScript to a more compatible version (ES5).
5. [Express](https://expressjs.com/) - Simplifies server management.
6. [Material UI](https://material-ui.com/) - Used in most pages except Editor and Renderer.
7. [ESLint](https://eslint.org/) - Code style checker. Makes sure the code style is consistent.

**Other tools:**

1. [Go Language](https://golang.org/) - Only used for line counting.
2. [Heroku](https://www.heroku.com/) - Used for deploying deploying project at an early stage of its development. "Procfile" you see in the root directory of the project specifies what command heroku server should run when deployed.
3. [Docker](https://www.docker.com/) - Allows to package the project into an image and run as a container. Ideally this whole project should eventually adapt microservices architecture and use Kubernetes for orchestating containers created with Docker.

**Planned for the future:**

1. [Kubernetes](https://kubernetes.io/) - Container orchistration for production deployment. When a fully functional tool is online, it should be deployed and managed by Kubernetes.
2. [Digital Ocean](https://www.digitalocean.com/) - This virtual server service seems to be the best one to get started on. Since whole website will be ran on Kubernetes, it could be later transfered to any other platform with ease.

## General structure of the project

This section will introduce you to the structure of the source code of the project.

### Folder Structure Outline

At the moment of writing this wiki, there are 4 folders in the root directory of the project:

1. `build` - contains a built files. It contains all the files the app needs for the tool to work online. This folder can be put into any environment that supports Node.js.
2. `config` - contains configuration files for all the development tools used.
3. `node_modules` - contains all node packages. You should never modify contents of this folder since it contains external dependencies which are not developed by this project.
4. `src` - contains all the project files.

It also contains several files:

1. `.gitignore` - file to specify which files and folders should not be managed by git protocol.
2. `Dockerfile` - specifies rules for the Docker image creation.
3. `linecounter.go` - counts number of lines and files in `src` folder.
4. `Procfile` - file for Heroku platform automated deploys.
5. `README.md` - a readme file for the project
6. `package.json` and `package-lock.json` - package manager configuration files

### Client Code

In the `src` directory there are several other folders. All of them (*except the `server`*) are part of the client side. This section will explain which folder contains what.

* `editor` - Contains all the code responsible for drawing editor tool in the browser. It is only responsible for the UI found on the routes starting with `/editor` after the host name in the address bar.
* `fft` - Contains fft.js library in a file so it could be imported in a browser as a global variable. This later should be updated to be in the signal-processing.js library.
* `projectManager` - Contains all the code responsible for drawing project manager in the browser.
* `viewer` - Contains all the React.js code for drawing renderer on the client.

### Server

All server code is located inslide `/src/server/` directory.

Server is responsible for several things:

* Routing traffic and responding with correct data.
* Compile node graph into executable javascript.

It is not responsible for

* Transpiling ES6 to ES5 syntax.
* Any other development tast (testing, linting, etc.)
* Drawing UI for the user.

### Compiler

Compiler is the main selling point of this project. It takes the node graph generated by the editor and converts it to an executable javascript code that can run in the browser. You can see preliminary algorithm preudocode for the compiler below.

1. Loop until all nodes are calculated
    1. Check if node was calculated before, if yes go to next node. (function)
    2. If was not calculated:
       1. Check if all connected inputs are connected to the calculated nodes, if not - go to next node. (function)
       2. If yes, save all unconnected inputs (value from default value). (function for each save)
       3. Check if output is pointing to a generator. (function)
       4. If yes, parse generator
          1. Scan generator and save variables
          2. If variable is a generator go to step 1.2.4
          3. Loop until all generators were parsed
       5. Check if output is pointing to an input, if yes assign input variable to the output variable
       6. Check if output is pointing to a setting, if yes assign constant to the setting
2. For each scope:
    1. Get all inputs and save them in variables (assumed to be calculated since termination condition from step 1 is based on all nodes being calculated.)
    2. Parse first generator and generate scope output variable (making sure that all variables from generator were saved beforehand)
    3. Generate an array of output data based on general (or connected) time array and save it into a variable
    4. Create redraw function, inside that function:
        1. Find appropriate canvas node in the dom
        2. Get context
        3. Repopulate graph array with new graphs.
    5. Create updateData function, inside that function:
        1. Loop through graph array and update graphs with new data.
