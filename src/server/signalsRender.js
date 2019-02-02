import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

function scriptComposer (requestJson) {
    // TODO: Parse json and return executable javascript
    let executable = 'window.antoni = function() {alert("This website was created by Antoni Silvestrovic")};';



    return executable;
}

function renderHtml (requestJson) {
    const ht = `<script>${scriptComposer(requestJson)}</script>`;

    const jsx = renderToStaticMarkup(
        <div>
            <canvas id="signals-renderer-canvas"></canvas>
        </div>
    );
    
    const scriptedHtml = jsx.slice(0, jsx.length - 6) + ht + "</div>";
    
    return scriptedHtml;
}

export function renderSignals (requestJson) {
    return renderHtml(requestJson);
}