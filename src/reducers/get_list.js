import * as types from '../constants/ActionTypes';

var initialState = {
    list: [],
    title: ""
};

const get_list = (state = initialState, action) => {
    switch(action.type){
        case types.SET_LIST_CANDIDATE:
            return {
                ...state,
                list: action.list
            };
        case types.SET_TITLE_LIST:
            return {
                ...state,
                title: action.name
            };
        default: 
            return state;
    }
};

export default get_list;