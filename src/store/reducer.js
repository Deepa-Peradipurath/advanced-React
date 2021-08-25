const initialState = {
    searchKeyword: "",
    searchResult : [],
    ListforAg:[]
};


function myReducer (state = initialState, action){

    switch (action.type) {

        case "GET_SEARCH_RESULTS" : {
            return {...state,
                searchKeyword: action.val
            }
        }
        case "SET_SEARCH_RESULTS" : {
            return {
                ...state,
                searchResult: action.val
            }
        }
        case "RESET_SEARCH" :{
            return {
                ...state,
                searchKeyword: "",
                searchResult: []
            }
        }
        case "GET_COMBINED_LIST_RESULTS":{
            return {
                ...state
            }
        }
        case "SET_COMBINED_LIST_RESULTS" :{
            return {
                ...state,
                ListforAg: action.val
            }
        }
        default:
            return {...state}
    };
}

export default myReducer ;