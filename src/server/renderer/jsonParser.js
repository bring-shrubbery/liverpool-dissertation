// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// --------------------- This code is only used for testing tokenised functions --------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

const tokenizeGenerator = require('./generatorTokenizer');
const fixScopes = require('./scopeFixer');
const tokenToJs = require('./tokenToJs')
const fs = require('fs');

function parseGenerator(title, gen, type) {
    // Parse string encoded generator code and store in an array
    console.log()

    // Folloing console.time benchmarks showed that:
    // * fixScopes function takes around 0.3ms to execute
    // * tokenizeGenerator function takes around 1.6ms to execute
    // console.time("Total Time");
    console.time("Scope Fix");
    let g = fixScopes(gen);
    console.timeEnd("Scope Fix");
    // console.time("Tokeniser");
    let parsedCode = tokenizeGenerator(g);
    // console.timeEnd("Tokeniser");
    // console.timeEnd("Total Time");

    console.log()    
    console.log(gen);
    console.log(g);
    // console.log(parsedCode);

    console.log(tokenToJs("hello", parsedCode));

    const json = JSON.stringify(parsedCode);
    fs.writeFileSync(__dirname + '/parsedGenerator.json', json);

    console.log()
}



// const data = {
//     "title":"sine",
//     "gen": "[amplitude]*sin(20.1*[PI]*([frequency]*[time])+[phase])",
//     "type": "signal"
// }

const data = {
    "title":"sine",
    "gen": "2+(-1)*[variable]*sin(2*[PI]*90)",
    "type": "signal"
}

parseGenerator(data.title, data.gen, data.type)

// export {parseGenerator};