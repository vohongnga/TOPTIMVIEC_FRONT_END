import * as types from '../constants/ActionTypes';

var initialState = {
    page_count: 0,
    page: 0,
    name_list: "",
    update: false,
    id_list: ""
};

const list_page = (state = initialState, action) => {
    switch(action.type){
        case types.SET_PAGE_LIST:
            state.page=action.page;
            return state;
        case types.SET_COUNT_PAGE_LIST:
            state.page_count=action.page_count;
            return state;
        case types.SET_NAME_LIST:
            state.name_list=action.name_list;
            return state;
        case types.SET_UPDATE_LIST:
            state.update=action.update;
            return state;
        case types.SET_ID_LIST:
            state.id_list=action.id;
            return state;
        default: 
            return state;
    }
};

export default list_page;