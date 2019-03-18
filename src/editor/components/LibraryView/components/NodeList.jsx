import React from 'react'

import LibraryItem from './LibraryItem.jsx'

// Node List
export default function NodeList (props) {
    let jsxNodeArray = [];

    for(const node in props.currentNodes) {
        let currentNode = props.currentNodes[node];
        jsxNodeArray.push(<LibraryItem  functionId={node} 
                                        key={node} 
                                        title={currentNode.title} 
                                        description={currentNode.description}/>)
    }

    return (
        <ul>
            {jsxNodeArray}
        </ul>
    )
}