import { combineReducers } from 'redux';
import hide_header from './hide_header';
import jobs from './job';
import search_value from './search_form';
import list_hashtag from './list_hashtag';
import list_place from './list_place';
import role from './role';
import choose_cv from './choose_cv';
import list from './list';

const appReducers = combineReducers({
    hide_header,
    jobs,
    search_value,
    list_hashtag,
    list_place,
    role,
    choose_cv,
    list
});
export default appReducers;