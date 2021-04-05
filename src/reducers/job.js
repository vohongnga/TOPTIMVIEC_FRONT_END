import { type } from 'jquery';
import * as types from '../constants/ActionTypes';

var initialState = [];

const jobs = (state = initialState, action) => {
    switch(action.type){
        case types.APPEND_LIST_JOB:
            state.push(...action.list_job);
            return [...state];
        case types.SET_LIST_JOB:
            state=action.list_job;
            return [...state];
        default: 
            return [...state];
    }
};

export default jobs;