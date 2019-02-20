import React from 'react';

const styles = `
    #signals-embedding-container, #signals-views, .signals-canvas {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    #signals-views {
        display: grid;
        grid-tempate-columns: 100%;
    }
`

export function jsxDom (nodes) {
    let outputNodes = [];

    // Get all kinds of output nodes
    for(let key in nodes) {
        let currentNode = nodes[key];

        if(String(key).substr(0, 5) === "scope") {
            currentNode.id = key;
            outputNodes.push(currentNode);
        }
    }

    // console.log(outputNodes);

    // Generate Dynamic Stuff
    const canvasJsx = outputNodes.length > 0 ? outputNodes.map(node => {
        return (<canvas className="signals-canvas" 
                        id={`${node.id}`} 
                        key={node.id}
        ></canvas>)
    }) : null;

    const settings = null;

    // Generate Final JSX
    const SignalViews = canvasJsx ?
        (
            <div id="signals-views" style={{gridTemplateRows: `repeat(${outputNodes.length}, 1fr)`}}>
                {canvasJsx}
            </div>
        ) : null;

    const SettingsJsx = settings ?
        (
            <div id="signals-settings">
                {settings}
            </div>
        ) : null;

    return (
        <div id={"signals-embedding-container"}>
            <style>{styles}</style>
            {SettingsJsx}
            {SignalViews}
        </div>
    )
}