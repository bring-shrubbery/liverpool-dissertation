import React, {Component} from 'react';
import './library.scss';

// Components
import SearchBar from './components/SearchBar.jsx'
import NodeList from './components/NodeList.jsx'
import CategorySelector from './components/CategorySelector.jsx'

// Redux
import { connect } from 'react-redux';
import { searchLibrary, selectCategory } from '../../redux/actions/libraryActions.js';

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
        const shadowDiv = e.target.getElementsByTagName("li")[0];

        if(e.target.scrollTop > 8) {
            shadowDiv.classList.add('search-shadow');
        } else {
            shadowDiv.classList.remove('search-shadow');
        }
    }

    componentWillMount () {
        this.props.dispatch(selectCategory(this.props.category));
    }

    updateCategory (e) {
        e.preventDefault();
        this.props.dispatch(selectCategory(e.target.id));
    }

    search(e) {
        e.preventDefault();
        this.props.dispatch(searchLibrary(e.target.value));
    }

    render () {
        return (
            <div id={'library-view'} onScroll={this.searchShadowCheck}>
                <SearchBar onSearch={this.search} value={this.props.searchTerm}/>
                <NodeList currentNodes={this.props.currentNodes}/>
                <CategorySelector category={this.props.category} updateCategory={this.updateCategory}/>
            </div>
        )
    }
}