/**
 * Created by caozheng on 2017/1/4.
 */
import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
// mainPage
import * as mainPage from "./mainPage";

const indexReduces = combineReducers({
    ...mainPage,
    routing: routerReducer
});

export default indexReduces;