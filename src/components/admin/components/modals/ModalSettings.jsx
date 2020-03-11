import React , {Component , Fragment} from 'react';
import './Modals.css';

import {Modal,Button,Grid,Icon,Input,Dropdown} from "semantic-ui-react";
import ModalTable from "./modalTypes/ModalTabel";

import config from "../../../../config.json";

class ModalSettings extends Component {

    state={
        headerText:"",
        typeElement:"",
        typeData:""
    };


    handleChangeTypeElement = (e, { value }) => this.setState({ typeElement:value });

    handleChangeDataElement = (e, { value }) => this.setState({ typeData:value });

    render() {

        const typeElementOption=[
            { key: 'table',value:"table", text: 'جدول' ,className:"dropdownType"},
            { key: 'form' ,value:"form" , text: 'فرم'  ,className:"dropdownType"}
            ];

        const typeElementData= [
            {key:"users",value:config.api_users,text:"نمایش کاربران",className:"dropdownType"},
        ];

        const {headerText,typeElement,typeData} = this.state;
        return (
            <Fragment>
                <Modal.Header>تنظیمات ایجاد یک المنت</Modal.Header>
                <Modal.Content scrolling>
                    <Modal.Description>
                        <Grid padded>
                            <Grid.Row >
                                <Grid.Column>
                                    <h3>عنوان</h3>
                                    <Input
                                        value={headerText}
                                        onChange={e => this.setState({headerText:e.target.value})}
                                        fluid
                                        type={"text"}
                                    />
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row className={"paddingGridRow"}>

                                <Grid.Column width={8}>
                                    <h3> انتخاب نوع المنت </h3>
                                    <Dropdown
                                        placeholder='انتخاب نوع المنت'
                                        fluid
                                        search
                                        selection
                                        options={typeElementOption}
                                        className={"dropdownType"}
                                        value={typeElement}
                                        onChange={this.handleChangeTypeElement}
                                    />
                                </Grid.Column>

                                <Grid.Column width={8}>
                                    <h3> انتخاب دیتابیس </h3>
                                    <Dropdown
                                        placeholder='انتخاب دیتابیس'
                                        fluid
                                        search
                                        selection
                                        options={typeElementData}
                                        className={"dropdownType"}
                                        value={typeData}
                                        onChange={this.handleChangeDataElement}
                                    />
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                {
                                    typeElement==="table" ? <ModalTable/> : ""
                                }

                            </Grid.Row>
                        </Grid>


                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary>
                        Proceed <Icon name='chevron right'/>
                    </Button>
                </Modal.Actions>
            </Fragment>
        )
    }
}

export default ModalSettings;