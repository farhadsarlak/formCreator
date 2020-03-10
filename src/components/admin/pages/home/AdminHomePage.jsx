import React from 'react';
import './AdminHomePage.css';

import {Container,Grid} from "semantic-ui-react";


const AdminHomePage = () => {

    return(
        <Container fluid className={"mainContainerHomePage"}>
            <Grid padded>
                <Grid.Row>
                    <Grid.Column computer={8} tablet={8} mobile={16}>
                        1
                    </Grid.Column>

                    <Grid.Column computer={8} tablet={8} mobile={16}>
                        2
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
};

export default AdminHomePage;