import React from 'react';

import {Container} from "semantic-ui-react";
import {Switch,Route} from 'react-router-dom';

import ScrollToTop from "./components/widgets/scrollToTop/ScrollToTop";

import Home from "./pages/home/Home";
import SignInAndSignOut from "./pages/signin-signout/SignIn&SignOut";
import Header from "./components/client/header/Header";
import Footer from "./components/client/footer/Footer";

const App = () =>{

    return(
        <Container fluid>
            <ScrollToTop>
                <Header/>
                <Switch>
                    <Route path={"/signInSignOut"} component={SignInAndSignOut}/>
                    <Route path={"/"} component={Home}/>
                </Switch>
                <Footer/>
            </ScrollToTop>
        </Container>
    )
};

export default App;