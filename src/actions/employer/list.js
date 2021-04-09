import * as types from './../../constants/ActionTypes';
import callApi from './../../utils/apiCaller'

export const setList = (list) => {
    return {
        type: types.SET_LIST,
        list
    };
}
export const setPageList = (page) => {
    return {
        type: types.SET_PAGE_LIST,
        page
    };
}
export const setCountPageList = (page_count) => {
    return {
        type: types.SET_COUNT_PAGE_LIST,
        page_count
    };
}
export const fetchSetList = (page) => {
    return (dispatch) => {
        return callApi('list-candidate?page='+page, 'GET').then(res => {
            dispatch(setList(res.data.candidate_lists));
            dispatch(setCountPageList(res.data.page));
        });
    }
}
export const setNameList = (name_list) => {
    return {
        type: types.SET_NAME_LIST,
        name_list
    };
}
export const setUpdateList = (update) => {
    return {
        type: types.SET_UPDATE_LIST,
        update
    };
}
export const setIdList = (id) => {
    return {
        type: types.SET_ID_LIST,
        id
    };
}