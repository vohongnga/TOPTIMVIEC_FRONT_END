import { combineReducers } from 'redux';
import hide_header from './hide_header';
import jobs from './job';
import search_value from './search_form';

const appReducers = combineReducers({
    hide_header,
    jobs,
    search_value
});
export default appReducers;