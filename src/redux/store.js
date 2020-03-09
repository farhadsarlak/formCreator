import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';

import rootReducer from './rootReducer';

const middlewares=[thunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

const store = createStore(rootReducer,applyMiddleware(...middlewares));
const persistor= persistStore(store);

if(process.env.NODE_ENV !== 'production') {
    if (module.hot) {
        module.hot.accept('./rootReducer' , () => {
            const newRootReducer = require('./rootReducer').default;
            store.replaceReducer(newRootReducer);
        })
    }
}

export {store,persistor};
