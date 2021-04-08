import * as types from './../../constants/ActionTypes';
import callApi from './../../utils/apiCaller';
import * as actions from './../index';

export const fetchSetListCV = (list_id_showed, list_hashtag, place) => {
    return (dispatch) => {
        return callApi('cv-list', 'POST', {
            "list_id_showed": list_id_showed, 
            "list_hashtag": list_hashtag,
            "place": place
        }).then(res => {
            if (res)
                dispatch(actions.setListJob(res.data.list_cv));
        });
    }
}
export const fetchAppendListCV = (list_id_showed, list_hashtag, place) => {
    return (dispatch) => {
        return callApi('cv-list', 'POST', {
            "list_id_showed": list_id_showed, 
            "list_hashtag": list_hashtag,
            "place": place
        }).then(res => {
            if (res)
                dispatch(actions.appendListJob(res.data.list_cv));
        });
    }
}
export const chooseCV = (cv) => {
    return {
        type : types.CHOOSE_CV,
        cv
    };
}
