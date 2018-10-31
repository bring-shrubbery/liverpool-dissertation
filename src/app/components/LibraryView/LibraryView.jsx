import React, {Component} from 'react';
import './library.scss';
import libraryNodes from './libraryNodes.json';

// Item that appears in library view, aka node
function LibraryItem (props) {
    return (
        <li className={'library-list-node'} 
            id={props.functionId} 
            draggable={'true'} 
            onDragStart={e => e.dataTransfer.setData("text", e.target.id)}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {/* <span>input</span> */}
        </li>
    )
}

// Complete Library view
export default class LibraryView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            selectedCategory: 'input'
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.searchShadowCheck = this.searchShadowCheck.bind(this);
        this.libraryList = this.libraryList.bind(this);
    }

    // Handles onChange search event
    handleSearch(e) {
        const searchTerm = e.target.value;
        this.setState({searchTerm: searchTerm});
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

    // Lists nodes from library based on search, shows everything when nothing is entered
    libraryList () {
        let category = this.state.selectedCategory;

        let listItems = new Array();

        for(let node in libraryNodes[category]) {
            // console.log(node);
            let item = libraryNodes[category][node];

            let searchExpression = new RegExp(this.state.searchTerm, "i");

            if(item.title.search(searchExpression) >= 0) {
                listItems.push(
                    <LibraryItem key={node} 
                                searchTerm={this.state.searchTerm} 
                                title={item.title} 
                                description={item.description}
                                functionId={node}/>
                );
            }
        }
        
        return listItems;
    } 

    render () {
        return (
            <div id={'library-view'} onScroll={this.searchShadowCheck}>
                <div id={'library-view-search-bar'}>
                    <input type={'text'} onChange={this.handleSearch} placeholder={'search'}></input>
                </div>
                <ul >
                    {this.libraryList()}
                </ul>
                <div id={'library-view-category-selector'}>
                    <div className={this.state.selectedCategory == 'input' ? 'selected' : ''}
                        onClick={() => this.setState({selectedCategory: 'input'})}>input</div>
                    <div className={this.state.selectedCategory == 'processors' ? 'selected' : ''}
                        onClick={() => this.setState({selectedCategory: 'processors'})}>processors</div>
                    <div className={this.state.selectedCategory == 'output' ? 'selected' : ''}
                        onClick={() => this.setState({selectedCategory: 'output'})}>output</div>
                </div>
            </div>
        )
    }
}