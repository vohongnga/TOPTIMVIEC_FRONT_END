import * as types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller'
import axios from 'axios'
import Cookies from 'universal-cookie';
import {API_URL} from './../constants/ApiUrl'

const cookies = new Cookies();

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
export const fetchAppendListJob = (list_id_showed, list_hashtag, place) => {
    return (dispatch) => {
        const key = cookies.get('refresh_token');
        if (key) {
            return callApi('post-list', 'POST', {
                "list_id_showed": list_id_showed, 
                "list_hashtag": list_hashtag,
                "place": place
            }).then(res => {
                if (res)
                    dispatch(appendListJob(res.data.list_post));
            });
        } else {
            return axios({
                method: 'POST',
                url: API_URL+'post-list',
                data: {
                    "list_id_showed": list_id_showed, 
                    "list_hashtag": list_hashtag,
                    "place": place
                }
            }).catch(res => {
                dispatch(appendListJob(res.response.data.list_post));
            })
        }
    }
}
export const appendListJob = (list_job) => {
    return {
        type: types.APPEND_LIST_JOB,
        list_job
    };
}
export const fetchSetListJob = (list_id_showed, list_hashtag, place) => {
    return (dispatch) => {
        const key = cookies.get('refresh_token');
        if (key) {
            return callApi('post-list', 'POST', {
                "list_id_showed": list_id_showed, 
                "list_hashtag": list_hashtag,
                "place": place
            }).then(res => {
                if (res)
                    dispatch(setListJob(res.data.list_post));
            });
        }
        else {
            return axios({
                method: 'POST',
                url: API_URL+'post-list',
                data: {
                    "list_id_showed": list_id_showed, 
                    "list_hashtag": list_hashtag,
                    "place": place
                }
            }).then(res => {
                dispatch(setListJob(res.data.list_post));
            }).catch(res => {
                dispatch(setListJob(res.response.data.list_post));
            })
        }
    }
}
export const setListJob = (list_job) => {
    return {
        type: types.SET_LIST_JOB,
        list_job
    };
}
export const setLoadJob = (load) => {
    return {
        type: types.SET_LOAD_JOB,
        load
    };
}
export const setLoadingJob = (loading) => {
    return {
        type: types.SET_LOADING_JOB,
        loading
    };
}
export const setRole = (role) => {
    return {
        type: types.SET_ROLE,
        role
    };
}
export const choiceAttachCv = (cv) => {
    return {
        type: types.CHOICE_ATTACH_CV,
        cv
    }
}