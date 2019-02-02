import libraryNodes from '../../libraryNodes.json';

const defaultState = {
    libraryNodes: libraryNodes,
    currentLibraryNodes : {},
    librarySearchTerm: "",
    librarySelectedCategory: "input"
}

const savedState = window.localStorage ? JSON.parse(window.localStorage.getItem("redux_latest_store")) : null;
// const savedState = null;

const libraryDefaultState = savedState ? savedState["library"] : defaultState;
    
export default function reducer (state = libraryDefaultState, action) {
    switch(action.type) {
        case "LIBRARY_SEARCH": {
            const newSearchTerm = String(action.payload);
            const searchRegex = new RegExp(newSearchTerm, "i");
            const allNodesUnderCategory = state.libraryNodes[state.librarySelectedCategory];
            let newCurrentNodes = {}

            for(const node in allNodesUnderCategory) {
                const currentNode = allNodesUnderCategory[node];

                if(currentNode.title.search(searchRegex) != -1) {
                    newCurrentNodes[node] = currentNode;
                }
            }

            console.log(newSearchTerm);

            return {
                ...state,
                librarySearchTerm: newSearchTerm,
                currentLibraryNodes: newCurrentNodes
            }
        }

        case "SELECT_CATEGORY": {
            let newCurrentNodes = {};
            const newCategory = action.payload;
            const searchRegex = new RegExp(state.librarySearchTerm, "i");
            const allNodesUnderCategory = state.libraryNodes[newCategory];

            for(const node in allNodesUnderCategory) {
                const currentNode = allNodesUnderCategory[node];
                
                if(currentNode.title.search(searchRegex) != -1) {
                    newCurrentNodes[node] = currentNode;
                } 
            }

            return {
                ...state,
                librarySelectedCategory: newCategory,
                currentLibraryNodes: newCurrentNodes
            }
        }

        case "SELECT_CATEGORY_INVALID": {
            return {...state};
        }

        case "LIBRARY_SEARCH_INVALID_TYPE": {
            return {...state};
        }

        default: {
            return {...state};
        }
    }
}