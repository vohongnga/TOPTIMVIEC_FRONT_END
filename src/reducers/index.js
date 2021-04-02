import { combineReducers } from 'redux';
import hide_header from './hide_header';
import show_header from './show_header';

const appReducers = combineReducers({
    hide_header,
    show_header
});
export default appReducers;