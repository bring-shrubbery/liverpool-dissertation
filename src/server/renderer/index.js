import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import { scriptGenerator } from './scriptGenerator.ts';
import { jsxDom } from './viewerDom';

function renderHtml (requestJson) {
    // Separate nodes from connectors
    const allNodes = {...requestJson.allNodes};
    const allConnections = [...requestJson.allConnections];

    // Render HTML
    const jsx = jsxDom(allNodes);
    const jsxString = renderToStaticMarkup(jsx);

    // Generate Scripts
    console.time("Script Parser");
    const scriptArray = scriptGenerator(allNodes, allConnections);
    let composedScriptString = "";
    for(let s in scriptArray) {
        if(s == 0) continue;
        composedScriptString += scriptArray[s];
    }
    console.timeEnd("Script Parser");
    let scripts = `<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js"></script>\n`;
    scripts += `<script>${scriptArray[0]}</script>`;
    scripts += `<script>${composedScriptString}</script>`;
    
    // Combine former results
    const scriptedHtml = jsxString.slice(0, jsxString.length - 6) + scripts + "</div>";
    
    // Return generated HTML as a string
    return scriptedHtml;
}

export function renderSignals (requestJson) {
    return renderHtml(requestJson);
}