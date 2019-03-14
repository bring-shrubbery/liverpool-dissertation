// Production webpack config
const serverConfig = require('./prod/webpack_server')
const editorConfig = require('./prod/webpack_react')
const projectsConfig = require('./prod/webpack_preact')
const fft = require('./prod/webpack_fft')

module.exports = [
    serverConfig,
    editorConfig,
    projectsConfig,
    fft
];