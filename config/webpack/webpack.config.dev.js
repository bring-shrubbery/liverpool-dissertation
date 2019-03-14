// Development webpack config
const serverConfig = require('./dev/webpack_server.js')
const editorConfig = require('./dev/webpack_react.js')
const projectsConfig = require('./dev/webpack_preact.js')
const fft = require('./dev/webpack_fft.js')

module.exports = [
    serverConfig,
    editorConfig,
    projectsConfig,
    fft
];