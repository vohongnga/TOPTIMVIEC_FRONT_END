import * as types from '../constants/ActionTypes';

let initialState = {
    tag: [],
    place: "",
    load: true,
    loading: true
};

const search_value = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_HASHTAG:
            return {
                ...state,
                tag: action.hashtag
            };
        case types.CHANGE_PLACE:
            return {
                ...state,
                place: action.place
            };
        case types.SET_LOAD_JOB:
            return {
                ...state,
                load: action.load
            };
        case types.SET_LOADING_JOB:
            return {
                ...state,
                loading: action.loading
            };
        default: 
            return state;
    }
};

export default search_value;