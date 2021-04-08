import * as types from './../../constants/ActionTypes';
import callApi from './../../utils/apiCaller'

export const setList = (list) => {
    return {
        type: types.SET_LIST,
        list
    };
}
export const appendList = (list) => {
    return {
        type: types.APPEND_LIST,
        list
    };
}
export const setPageList = (page) => {
    return {
        type: types.SET_PAGE_LIST,
        page
    };
}
export const fetchSetList = (page) => {
    return (dispatch) => {
        return callApi('list-candidate?page='+page, 'GET').then(res => {
            if (res)
                dispatch(setList(res.data.candidate_lists));
        });
    }
}