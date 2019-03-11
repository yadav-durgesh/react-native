import { combineReducers } from 'redux';
import nav from './navReducer';

function dataFunction(state = {}, action) {
    return null;
}

function dataFunctionSec(state = {}, action) {
    return null;
}

const AppReducer = combineReducers({
    dataFunction,
    dataFunctionSec,
    nav
});

export default AppReducer;