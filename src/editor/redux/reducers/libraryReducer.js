const defaultState = {
    libraryNodes: {...document.libraryNodes},
    currentLibraryNodes : {},
    librarySearchTerm: "",
    librarySelectedCategory: "input"
}
    
export default function reducer (state = defaultState, action) {
    switch(action.type) {
        case "LIBRARY_SEARCH": {
            const newSearchTerm = String(action.payload);
            const searchRegex = new RegExp(newSearchTerm, "i");
            const allNodesUnderCategory = state.libraryNodes[state.librarySelectedCategory];
            const allNodes = {
                ...state.libraryNodes["input"],
                ...state.libraryNodes["processors"],
                ...state.libraryNodes["output"],
                ...state.libraryNodes["ui"]
            };

            let newCurrentNodes = {}

            if(newSearchTerm !== "") {
                for(const node in allNodes) {
                    const currentNode = allNodes[node];
    
                    if(currentNode.title.search(searchRegex) != -1) {
                        newCurrentNodes[node] = currentNode;
                    }
                }
            } else {
                for(const node in allNodesUnderCategory) {
                    const currentNode = allNodesUnderCategory[node];
    
                    if(currentNode.title.search(searchRegex) != -1) {
                        newCurrentNodes[node] = currentNode;
                    }
                }
            }

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