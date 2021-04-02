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
export const showHeader = () => {
    return {
        type : types.SHOW_HEADER
    };
}
export const notShowHeader = () => {
    return {
        type : types.NOT_SHOW_HEADER
    };
}