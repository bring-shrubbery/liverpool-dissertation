# Educational Signal Visualisation Toolbox
DEMO: https://signals-app.herokuapp.com/ <br/>
DOCS: https://antoni-silvestrovic.gitbook.io/workspace/

## Description

Visualisation of the mathematical concepts is not an easy task. Although many visualisations were created and are being used, they were created with tools whose purpose is not the visualisation of the those concepts. As a result, you can only make one visualisation at once. And if new concept is introduced, it's often required to create it from scratch. This project is an attpemt to simplify signal visualisation for educational purposes.

## Prerequisites

To run this project you will need **Node.js** on your machine.
You can get it from [here](https://nodejs.org/en/).

## Installation

To get your hand on the source code of the project you have to clone it from the github:

`git clone https://github.com/vincentrodriguez/signals-visualisation.git`

Before you can run it you have to intall dependencies:

`npm install`

After installing dependencies you can either run it as a local server:

`npm run server`

or build it into static files:

`npm run build`

## Usage

If you run this app as a server, then you just need to visit localhost on port 3000. To do that, go to the browser and type `http://localhost:3000/` into the address bar.

If you're building the project into static files, then you'll need to host your own server. If you want to host those files locally you can use `serve` tool from npm.
Run `npm install -g serve` in your command line, go to the root directory of the project and type `serve ./build`. This will host 

## Contributing

Contributions are welcome. You can learn more about contributing on the [wiki page](https://github.com/vincentrodriguez/signals-visualisation/wiki/Contributing).

## Credits

This project was originally created by [Antoni Silvestrovic](https://github.com/vincentrodriguez).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
