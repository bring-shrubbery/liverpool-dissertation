export function searchLibrary(searchTerm) {
    if(typeof(searchTerm) != String && typeof(searchTerm) != "string") {
        console.error("Invalid search value type. Should be string, instead it's " + (typeof searchTerm));
        return {
            type: "LIBRARY_SEARCH_INVALID_TYPE",
            payload: (typeof searchTerm)
        }
    }

    return {
        type: "LIBRARY_SEARCH",
        payload: searchTerm
    }
}

export function selectCategory(category) {

    if(category !== "input" && category !== "processors" && category !== "output" && category !== "ui") {
        console.error("Invalid library category input. Can be 'ui', 'input', 'processors' or 'output', instead it's ", category);
        return {
            type: "SELECT_CATEGORY_INVALID",
            payload: category
        }
    }

    return {
        type: "SELECT_CATEGORY",
        payload: category
    }
}