import * as types from '../constants/ActionTypes';

var initialState = [];

const list = (state = initialState, action) => {
    switch(action.type){
        case types.APPEND_LIST:
            state.push(...action.list);
            return [...state];
        case types.SET_LIST:
            state=action.list;
            return [...state];
        default: 
            return [...state];
    }
};

export default list;