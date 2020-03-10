import React from 'react';
import {render} from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

import App from './App';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store,persistor} from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import Dashboard from "./components/admin/Dashboard";


const rootEl=document.getElementById('root');

let renderApp=()=> {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <Switch>
                        <Route path={"/admin"} render={ ()=>{
                            if(localStorage.getItem('token')) return <Dashboard/>;
                            else return <Redirect to={"/"}/>
                        }}/>

                        <Route path={"/"} component={App}/>
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