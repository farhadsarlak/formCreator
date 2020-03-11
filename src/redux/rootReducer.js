import {combineReducers} from 'redux';

import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userReducer from './user/userReducer';
import createElementReducer from './createElement/createElementReducer';

const persistConfig={
    key:'root',
    storage,
    whiteList:[
        'user',
        'createElement'
    ]
};

const rootReducer = combineReducers({
    user: userReducer,
    createElement:createElementReducer
});

export default persistReducer(persistConfig,rootReducer);