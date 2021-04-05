import * as types from '../constants/ActionTypes';

var initialState = {
    tag: [],
    place: "",
    load: true
};

const search_value = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_HASHTAG:
            state.tag=action.hashtag;
            return state;
        case types.CHANGE_PLACE:
            state.place=action.place;
            return state;
        case types.SET_LOAD_JOB:
            state.load=action.load;
            return state;
        default: 
            return state;
    }
};

export default search_value;