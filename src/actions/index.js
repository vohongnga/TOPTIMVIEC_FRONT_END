import * as types from './../constants/ActionTypes';

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