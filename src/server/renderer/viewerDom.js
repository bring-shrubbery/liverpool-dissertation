import React from 'react';

const styles = (settingsCount, scopeCount) => {
    const isOnlyScopes = (settingsCount === 0 && scopeCount > 0);
    const isOnlySettings = (settingsCount > 0 && scopeCount === 0);
    const isSettingsAndScopes = (settingsCount > 0 && scopeCount > 0);
    
    const isDividableByTwo = scopeCount%2 == 0;

    return `#signals-embedding-container {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        ${isSettingsAndScopes ?
            `display: grid;
            grid-template-columns: 300px calc(100% - 300px);
            grid-template-rows: 100%;` 
            : ''
        }

    }

    .signals-canvas {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    .canvas-container {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: relative;
    }

    #signals-views {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: grid;
        ${!isDividableByTwo ? `grid-template-rows: repeat(${scopeCount}, ${parseFloat(100/scopeCount).toFixed(2)}%);
        grid-template-columns: auto;`
        : `grid-template-rows: repeat(${scopeCount/2}, 1fr);
        grid-template-columns: 50% 50%;`}
        ${isSettingsAndScopes ? `grid-column: 2 / 3;` : ''}
    }

    ${isSettingsAndScopes ? `#signals-settings {
        margin: 0;
        padding: 10px;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        grid-column: 1 / 2;
        overflow-x: hidden;
        overflow-y: auto;
    }

    #signals-settings-list {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;

        list-style: none;
    }

    .signals-settings-list-item {
        display: grid;
        grid-template-columns: 3fr 4fr;
        grid-gap: 5px;
    }

    .signals-settings-slider {
        grid-template-columns: 3fr 4fr 1fr;
    }

    .signals-settings-slider div {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    .signals-settings-list-item h6 {
        margin: 2px;
        padding: 0;
        grid-column: 1 / 2;
        font-size: 12pt;
        font-weight: normal;
    }

    .signals-settings-list-item input {

    }
    
    .signals-settings-list-label {
        width: 100%;
        height: fit-content;
        margin: 0;
        padding: 0;
        font-size: 16pt;
        text-align: center;
    }`:''}
`};

export function jsxDom (nodes) {
    let canvasNodes = [];

    // Get all kinds of output nodes
    for(let key in nodes) {
        let currentNode = nodes[key];

        if(String(key).substr(0, 5) === "scope" || String(key).substr(0, 3) === "fft") {
            currentNode.id = key;
            canvasNodes.push(currentNode);
        }
    }

    let settingsNodes = [];
    let categories = [];

    
    for(let key in nodes) {
        let currentNode = nodes[key];
        
        const isThirdLetterUpperCase = String(key).substr(2, 1).toUpperCase() === String(key).substr(2, 1);
        const isUI = String(key).substr(0, 2) === "ui";
        const isActualUI = isUI && isThirdLetterUpperCase;
        
        if(isActualUI) {
            let categorySavedAlready = false;
            
            const currentCategory = currentNode.settings[0].value;

            for(let c in categories) {
                if(categories[c] == currentCategory) {
                    categorySavedAlready = true;
                    break;
                }
            }

            if(!categorySavedAlready) {
                categories.push(currentCategory);
            }

            currentNode.id = key;
            settingsNodes.push(currentNode);
        }
    }
    
    settingsNodes.sort(function(a, b) {
        const cat1 = a.settings[0].value;
        const cat2 = b.settings[0].value;

        if(cat1 === cat2) {
            const order1 = parseInt(a.settings[2].value);
            const order2 = parseInt(b.settings[2].value);

            return order1 - order2;
        } else {
            const catArr = [cat1, cat2];
            catArr.sort();

            if(catArr[0] === cat1) {
                return -1;
            } else {
                return 1;
            }
        }
    });

    // Sort by category:

    categories.sort();

    let newSettingsNodes = [];

    for(let c in categories) {
        for(let s in settingsNodes) {
            const currentNode = settingsNodes[s];
            if(currentNode.settings[0].value === categories[c]) {
                newSettingsNodes.push(currentNode);
                delete settingsNodes[s];
            }
        }
    }

    // Generate Dynamic Stuff
    const canvasJsx = canvasNodes.length > 0 ? canvasNodes.map(node => {
        return (<div className={'canvas-container'}><canvas className="signals-canvas" 
                        id={`${node.id}`} 
                        key={node.id}
        ></canvas></div>)
    }) : null;

    let lastCategory = "";
    const settings = newSettingsNodes.length > 0 ? newSettingsNodes.map(node => {
        let inputElement;
        let isSlider = false;
        let shouldSaveCategory = false;

        const currentCategory = node.settings[0].value;

        if(lastCategory !== currentCategory) {
            shouldSaveCategory = true;
            lastCategory = currentCategory;
        }
        
        if(node.id.substr(0, 8) === "uiNumber") {
            // 'uiNumber' settings:
            // 0 : Category - Category that controllers are sorted by.
            // 1 : Label    - Label next to the controller.
            // 2 : Order    - Vertical position of the controller in the category.
            // 3 : Default  - Default value
            // 4 : Min      - Minimum value
            // 5 : Max      - Maximum value
            // 6 : Step     - Step of the value
            inputElement = (<input  type={'number'} 
                                    id={node.id+"Input"}
                                    defaultValue={node.settings[3].value} 
                                    min={node.settings[4].value}
                                    max={node.settings[5].value}
                                    step={node.settings[6].value}
                                    readOnly={true}/>);
        } else if(node.id.substr(0, 8) === "uiSlider") {
            isSlider = true;
            // 'uiSlider' settings:
            // 0 : Category - Category that controllers are sorted by.
            // 1 : Label    - Label next to the controller.
            // 2 : Order    - Vertical position of the controller in the category.
            // 3 : Default  - Default value
            // 4 : Min      - Minimum value
            // 5 : Max      - Maximum value
            // 6 : Step     - Step of the value
            inputElement = (<input  type={'range'} 
                                    id={node.id+"Input"}
                                    defaultValue={node.settings[3].value} 
                                    min={node.settings[4].value}
                                    max={node.settings[5].value}
                                    step={node.settings[6].value}
                                    readOnly={true}/>);
        } else {
            // Returns message if the type is unsopported
            inputElement = <div>{'unsupported type'}</div>
        }

        if(shouldSaveCategory) {
            return (
                <React.Fragment key={node.id + currentCategory}>
                    <li key={currentCategory} className={'signals-settings-list-label'}>{currentCategory}</li>
                    <li className={'signals-settings-list-item ' + (isSlider ? "signals-settings-slider" : "")} id={node.id} key={node.id}>
                        <h6 className={'signals-settings-list-item-label'} id={node.id + "Label"}>{node.settings[1].value}</h6>
                        {inputElement}
                        {isSlider ? <div id={node.id+"Indicator"}>{node.settings[3].value}</div> : null}
                    </li>
                </React.Fragment>
            )
        } else {
            return (<li className={'signals-settings-list-item ' + (isSlider ? "signals-settings-slider" : "")} id={node.id} key={node.id}>
                <h6 className={'signals-settings-list-item-label'} id={node.id + "Label"}>{node.settings[1].value}</h6>
                {inputElement}
                {isSlider ? <div id={node.id+"Indicator"}>{node.settings[3].value}</div> : null}
            </li>);
        }
    }) : null;

    // Generate Final JSX
    const SignalViews = canvasJsx ?
        (
            <div id="signals-views">
                {canvasJsx}
            </div>
        ) : null;

    const SettingsJsx = settings ?
        (
            <div id="signals-settings">
                <ul id={'signals-settings-list'}>
                    {settings}
                </ul>
            </div>
        ) : null;

    return (
        <div id={"signals-embedding-container"}>
            <style>{styles(newSettingsNodes.length, canvasNodes.length)}</style>
            {SettingsJsx}
            {SignalViews}
        </div>
    )
}