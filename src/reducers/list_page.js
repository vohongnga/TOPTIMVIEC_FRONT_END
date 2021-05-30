import * as types from '../constants/ActionTypes';

let initialState = {
    page_count: 0,
    page: 0,
    name_list: "",
    update: false,
    id_list: ""
};

const list_page = (state = initialState, action) => {
    switch(action.type){
        case types.SET_PAGE_LIST:
            return {
                ...state ,
                page : action.page
            };
        case types.SET_COUNT_PAGE_LIST:
            return {
                ...state ,
                page_count : action.page_count
            };
        case types.SET_NAME_LIST:
            return {
                ...state ,
                name_list : action.name_list
            };
        case types.SET_UPDATE_LIST:
            return {
                ...state ,
                update : action.update
            };
        case types.SET_ID_LIST:
            return {
                ...state ,
                id_list : action.id
            };
        default: 
            return state;
    }
};

export default list_page;