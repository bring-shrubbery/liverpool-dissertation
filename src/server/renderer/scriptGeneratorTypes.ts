// Connector Interface from the data graph model
interface Connector {
    connectorStart: {
        nodeId: string,
        settingId: string
    }
    
    connectorEnd: {
        nodeId: string,
        settingId: string
    }
}

// Signals Nodes interface
interface SignalNode {
    title: string
    x: number
    y: number
    width: number
    height: number
    outputs: NodeOutputShape[]
    inputs: NodeInputShape[]
    generators: NodeGeneratorShape[]
    settings: NodeSettingsShape[]
}

// Node Output Shape for Node interface
interface NodeOutputShape {
    title: string,
    type: string
}

// Node Input Shape for Node interface
interface NodeInputShape {
    title: string,
    type: string,
    default: string
}

// Node Generator Shape for Node interface
interface NodeGeneratorShape {
    title: string,
    value: string,
    type: string
}

// Node Settings Shape for Node interface
interface NodeSettingsShape {
    title: string
    value: string
    type: string
    input?: boolean
    output?: boolean
}

interface NodeCollection {
    [signalId: string]: SignalNode
}