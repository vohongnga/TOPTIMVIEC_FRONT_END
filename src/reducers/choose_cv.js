import * as types from '../constants/ActionTypes';

let initialState = "";

const choose_cv = (state = initialState, action) => {
    switch(action.type){
        case types.CHOOSE_CV:
            state = action.cv;
            return state;
        default: 
            return state;
    }
};

export default choose_cv;