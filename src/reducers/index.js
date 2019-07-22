import {combineReducers} from "redux"
import messages from './messages';
import visibilityFilter from './visibiltyFilter';

export default combineReducers({
    messages,
    visibilityFilter
})