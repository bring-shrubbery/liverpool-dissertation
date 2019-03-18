import React from 'react'

// Category selector
export default function CategorySelector (props) {
    return (<div id={'library-view-category-selector'}>
        <div className={props.category === "input" ? 'selected' : ''}
            id="input"
            onClick={props.updateCategory}>input</div>
        <div className={props.category === "processors" ? 'selected' : ''}
            id="processors"
            onClick={props.updateCategory}>processors</div>
        <div className={props.category === "output" ? 'selected' : ''}
            id="output"
            onClick={props.updateCategory}>output</div>
        <div className={props.category === "ui" ? 'selected' : ''}
            id="ui"
            onClick={props.updateCategory}>UI</div>
    </div>);
}