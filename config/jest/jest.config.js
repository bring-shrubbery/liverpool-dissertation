const path = require('path');

module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    roots: [
        path.resolve(__dirname, "../../src")
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[tj]sx?$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    global: {
        "ts-jest": {
            tsConfig: "../typescript/dev.tsconfig.json"
        }
    }
};