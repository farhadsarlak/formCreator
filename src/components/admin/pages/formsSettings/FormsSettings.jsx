import React from 'react';
import {Container,Grid} from "semantic-ui-react";

const FormSettings= () => {


    return(
        <Container fluid>
            <Grid>
                <Grid.Row>

                    <Grid.Column mobile={16} tablet={5} computer={4}>
                        sidebar
                    </Grid.Column>

                    <Grid.Column mobile={16} tablet={11} computer={12}>
                        main
                    </Grid.Column>

                </Grid.Row>
            </Grid>
        </Container>
    )
};

export default FormSettings;