import * as types from '../constants/ActionTypes';

var initialState = true;

const show_header = (state = initialState, action) => {
    switch(action.type){
        case types.SHOW_HEADER:
            return true;
        case types.NOT_SHOW_HEADER:
            return false;
        default: 
            return state;
    }
};

export default show_header;