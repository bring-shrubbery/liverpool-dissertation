export const getCanvasWithId = (id, varName) => {
    // "var"
    let executable = "var ";
    // "var varName"
    executable += varName;
    // "var varName = document.getElementById(id);"
    executable += ` = document.getElementById("${id}");`
    // return constructed code
    return executable;
}

export function getCanvases(canvasArrayName, parentId) {
    let executable = "";

    executable += `
    var canvasView = document.getElementById("${parentId}");
    var ${canvasArrayName} = [];

    canvasView.childNodes.forEach(function(el) {
        canvasArray.push(el);
    });`

    return executable;
}

export const updateWithCode = (code, canvasArrayName) => {
    let executable = `
    var viewSize = {
        x: ${canvasArrayName}[0].parentNode.offsetWidth,
        y: ${canvasArrayName}[0].parentNode.offsetHeight
    }

    for(var i in ${canvasArrayName}) {
        var currentCanvas = canvasArray[i];
        var ctx = currentCanvas.node.getContext("2d");

        var w = viewSize.x;
        var h = viewSize.y / canvasArray.length;
        ${code}
    }`

    return executable;
}

export function drawSignal(signal) {
    let executable = `
    
    `
}