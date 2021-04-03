import { combineReducers } from 'redux';
import hide_header from './hide_header';
import jobs from './job';
import search_value from './search_form';
import list_hashtag from './list_hashtag';
import list_place from './list_place';

const appReducers = combineReducers({
    hide_header,
    jobs,
    search_value,
    list_hashtag,
    list_place
});
export default appReducers;