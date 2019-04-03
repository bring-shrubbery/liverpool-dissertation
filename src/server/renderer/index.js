import { renderToStaticMarkup } from 'react-dom/server';

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
    // console.time("Script Parser");

    const scriptArray = scriptGenerator(allNodes, allConnections);
    let composedScriptString = "";
    for(let s in scriptArray) {
        if(s == 0) continue;
        composedScriptString += scriptArray[s];
    }
    
    // console.timeEnd("Script Parser");

    // Package imports
    let scripts = `<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.bundle.min.js"></script>\n`;
    scripts += `<script src="https://unpkg.com/js-untar@2.0.0/build/dist/untar"></script>`;
    scripts += `<script src="https://unpkg.com/downloadjs@1.4.7/download.js"></script>`;
    scripts += `<script src="https://unpkg.com/gif.js@0.2.0/dist/gif.js"></script>`;

    // GIF Recorder
    scripts += `<script>
        var lastFrameTimestamp = null;
        var isRecording = false;
        document.getElementById("signals-recording-stop").style.display = "none";        

        document.getElementById("signals-back-button").onclick = function (e) {
            e.preventDefault();
            let newLink = window.location.href.replace("render", "editor");
            window.location.assign(newLink);
        }

        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            document.getElementById("signals-recording-start").style.display = "none";
            document.getElementById("signals-recording-stop").style.display = "none";
        }
    </script>`

    // Only add fft require if project uses fft
    for(let f in allNodes) {
        if(f.substr(0, 3) === "fft") {
            scripts += `<script src="/fft.js"></script>\n`;
            break;
        }
    }
    
    scripts += `<script>${scriptArray[0]}</script>\n`;
    scripts += `<script>${composedScriptString}</script>\n`;
    
    // Combine former results
    const scriptedHtml = jsxString.slice(0, jsxString.length - 6) + scripts + "</div>";
    
    // Return generated HTML as a string
    return scriptedHtml;
}

export function renderSignals (requestJson) {
    return renderHtml(requestJson);
}