import React from 'react';

import {Container} from "semantic-ui-react";
import {Route,Switch} from "react-router-dom";
import ScrollToTop from "../widgets/scrollToTop/ScrollToTop";

import Header from './components/header/Header';
import AdminHomePage from "./pages/home/AdminHomePage";
import FormSettings from "./pages/formsSettings/FormsSettings";

const Dashboard = () =>{


    return(
        <Container fluid>
            <ScrollToTop>
                <Header/>
                <Switch>

                    <Route path={"/admin/formsSetting"} component={FormSettings} />
                    <Route path={"/admin"} component={AdminHomePage} />
                </Switch>
            </ScrollToTop>
        </Container>
    )
};

export default Dashboard;