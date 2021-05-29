import * as types from '../constants/ActionTypes';

let initialState = null;

const choice_attach_cv = (state = initialState, action) => {
    switch(action.type) {
        case types.CHOICE_ATTACH_CV:
            state = action.cv
            return state;
        default:
            return state;
    }
}
export default choice_attach_cv;