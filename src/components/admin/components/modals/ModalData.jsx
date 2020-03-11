import React,{Fragment} from 'react';

import {Modal,Button,Header,Icon} from "semantic-ui-react";

const ModalData = () =>{

    return(
        <Fragment>
            <Modal.Header>modal data</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Header>Modal Header</Header>
                    <p>
                        This is an example of expanded content that will cause the modal's
                        dimmer to scroll
                    </p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button primary>
                    Proceed <Icon name='chevron right' />
                </Button>
            </Modal.Actions>
        </Fragment>
    )
};

export default ModalData;