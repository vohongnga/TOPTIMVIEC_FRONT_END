import * as types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller'

export const hideHeader = () => {
    return {
        type : types.HIDE_HEADER
    };
}
export const notHideHeader = () => {
    return {
        type : types.NOT_HIDE_HEADER
    };
}
export const changeHashtag = (hashtag) => {
    return {
        type : types.CHANGE_HASHTAG,
        hashtag
    };
}
export const changePlace = (place) => {
    return {
        type : types.CHANGE_PLACE,
        place
    };
}
export const setListHashtag = (list_hashtag) => {
    return {
        type : types.SET_LIST_HASHTAG,
        list_hashtag
    };
}
export const setListPlace = (list_place) => {
    return {
        type : types.SET_LIST_PLACE,
        list_place
    };
}
export const fetchListHashtag = () => {
    return (dispatch) => {
        return callApi('list-hashtag', 'GET', null).then(res => {
            if (res.status === 200) {
                dispatch(setListHashtag(res.data.list_hashtag));
            }
        });
    }
}
export const fetchListPlace = () => {
    return (dispatch) => {
        return callApi('list-place', 'GET', null).then(res => {
            if (res.status === 200) {
                dispatch(setListPlace(res.data.list_place));
            }
        });
    }
}