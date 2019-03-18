import React from 'react'

// Item that appears in library view, aka node
export default function LibraryItem (props) {
    return (
        <li className={'library-list-node'} 
            id={props.functionId} 
            draggable={'true'} 
            onDragStart={e => {
                e.dataTransfer.setData("id", props.functionId);
            }}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </li>
    )
}