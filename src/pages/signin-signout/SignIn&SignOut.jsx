import React from 'react';
import './SignInAndSignOut.css';

import {Grid,Container} from "semantic-ui-react";
import SignUp from "./signup/SignUp";
import SignIn from "./signin/SignIn";

const SignInAndSignOut = () =>{

    return(
        <Container className={"mainContainer-signInAndSignOut"}>
            <Grid>
                <Grid.Row>
                    <Grid.Column computer={8} tablet={8} mobile={16}>
                        <SignIn/>
                    </Grid.Column>

                    <Grid.Column computer={8} tablet={8} mobile={16}>
                        <SignUp/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
};

export default SignInAndSignOut;