import React from 'react'

// Search bar
export default function SearchBar (props) {
    return (<div id={'library-view-search-bar'}>
        <input type={'text'} onChange={props.onSearch} value={props.value} placeholder={'search'}/>
    </div>);
}