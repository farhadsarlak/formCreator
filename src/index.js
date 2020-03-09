import React from 'react';
import {render} from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store,persistor} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";


const rootEl=document.getElementById('root');

let renderApp=()=> {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <Switch>
                        <Route exact path={"/"} component={App}/>
                    </Switch>
                </PersistGate>
            </BrowserRouter>
        </Provider>
        , rootEl);
};

if (module.hot){
    module.hot.accept('./App',()=>{
        setTimeout(renderApp)
    })
}

renderApp();