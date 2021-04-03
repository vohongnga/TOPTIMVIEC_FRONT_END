import { combineReducers } from 'redux';
import hide_header from './hide_header';
import jobs from './job';

const appReducers = combineReducers({
    hide_header,
    jobs
});
export default appReducers;