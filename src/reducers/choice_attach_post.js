import * as types from '../constants/ActionTypes';

let initialState = null;

const choice_attach_post = (state = initialState, action) => {
    switch(action.type) {
        case types.CHOICE_ATTACH_POST:
            state  = action.post
            return state;
        default:
            return state;
    }
}
export default choice_attach_post;