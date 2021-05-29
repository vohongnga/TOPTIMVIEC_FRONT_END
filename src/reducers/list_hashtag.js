import * as types from '../constants/ActionTypes';

let initialState = [];

const list_hashtag = (state = initialState, action) => {
    switch(action.type){
        case types.SET_LIST_HASHTAG:
            return action.list_hashtag;
        default: 
            return state;
    }
};

export default list_hashtag;