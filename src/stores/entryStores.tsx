/**
 * Created by caozheng on 2017/1/4.
 */
import { createStore, applyMiddleware } from 'redux';
import indexReduces from '../reduces/index';
import logger from './../middleware/loggerMiddleWare';
import thunkMiddleware from 'redux-thunk';


/*创建store  并且插入中间件*/
let createStoreWithMiddleware  = applyMiddleware(logger, thunkMiddleware)(createStore);
//console.log(indexReduces);
export default createStoreWithMiddleware(indexReduces);