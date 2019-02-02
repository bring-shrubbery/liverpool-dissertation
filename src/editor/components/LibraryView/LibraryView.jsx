import React, {Component} from 'react';
import './library.scss';

import { connect } from 'react-redux';

// Redux Actions
import { searchLibrary, selectCategory } from '../../redux/actions/libraryActions.js';

// Item that appears in library view, aka node
function LibraryItem (props) {
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

// Complete Library view
// decoratorsBeforeExport: true
@connect((store) => {
    return {
        currentNodes: store.library.currentLibraryNodes,
        searchTerm: store.library.librarySearchTerm,
        category: store.library.librarySelectedCategory
    }
})
export default class LibraryView extends Component { 
    constructor(props) {
        super(props);

        this.updateCategory = this.updateCategory.bind(this);
        this.search = this.search.bind(this);
    }
    // Applies specific class to search bar when content goes under it
    searchShadowCheck(e) {
        // console.log(e.target.getElementsByTagName("div"));
        if(e.target.scrollTop > 8) {
            e.target.getElementsByTagName("div")[0].classList.add('search-shadow');
        } else {
            e.target.getElementsByTagName("div")[0].classList.remove('search-shadow');
        }
    }

    nodeList () {
        let jsxNodeArray = [];
        for(const node in this.props.currentNodes) {
            let currentNode = this.props.currentNodes[node];
            jsxNodeArray.push(<LibraryItem functionId={node} key={node} title={currentNode.title} description={currentNode.description}/>)
        }

        return jsxNodeArray;
    }

    componentWillMount () {
        this.props.dispatch(selectCategory(this.props.category));
    }

    updateCategory (e) {
        e.preventDefault();
        const category = e.target.id;
        this.props.dispatch(selectCategory(category));
    }

    search(e) {
        e.preventDefault();

        const searchTerm = e.target.value;
        this.props.dispatch(searchLibrary(searchTerm));

    }
    render () {
        return (
            <div id={'library-view'} onScroll={this.searchShadowCheck}>
                <div id={'library-view-search-bar'}>
                    <input type={'text'} onChange={this.search}  placeholder={'search'}></input>
                </div>
                <ul >
                    {this.nodeList()}
                </ul>
                <div id={'library-view-category-selector'}>
                    <div className={this.props.category === "input" ? 'selected' : ''}
                        id="input"
                        onClick={this.updateCategory}>input</div>
                    <div className={this.props.category === "processors" ? 'selected' : ''}
                        id="processors"
                        onClick={this.updateCategory}>processors</div>
                    <div className={this.props.category === "output" ? 'selected' : ''}
                        id="output"
                        onClick={this.updateCategory}>output</div>
                </div>
            </div>
        )
    }
}