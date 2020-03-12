import React , {Component , Fragment} from 'react';
import "./modalTypes.css";

import {Grid,Table,Input,Dropdown,Checkbox,Pagination} from "semantic-ui-react";
import adminContextApi from "../../../contexApi/adminContextApi";

class ModalTable extends Component {

    state={
        header1:'نام کاربری',
        header2:'ایمیل',
        selectedOptions:[],
        selectedColor:'',
        options:[
            {key:'celled',     value:'celled',     text:'celled'},
            {key:'inverted',   value:'inverted',   text:'inverted'},
            {key:'basic',      value:'basic',      text:'basic'},
            {key:'collapsing', value:'collapsing', text:'collapsing'},
            {key:'padded',     value:'padded',     text:'padded'},
            {key:'selectable', value:'selectable', text:'selectable'},
            {key:'singleLine', value:'singleLine', text:'singleLine'},
            {key:'sortable',   value:'sortable',   text:'sortable'},
            {key:'stackable',  value:'stackable',  text:'stackable'},
            {key:'striped',    value:'striped',    text:'striped'},
            {key:'structured', value:'structured', text:'structured'},
            {key:'unstackable',value:'unstackable',text:'unstackable'}
        ],
        colors : [
            {key:'red',    value:'red',    text:'red'},
            {key:'orange', value:'orange', text:'orange'},
            {key:'yellow', value:'yellow', text:'yellow'},
            {key:'olive',  value:'olive',  text:'olive'},
            {key:'green',  value:'green',  text:'green'},
            {key:'teal',   value:'teal',   text:'teal'},
            {key:'blue',   value:'blue',   text:'blue'},
            {key:'violet', value:'violet', text:'violet'},
            {key:'purple', value:'purple', text:'purple'},
            {key:'pink',   value:'pink',   text:'pink'},
            {key:'brown',  value:'brown',  text:'brown'},
            {key:'grey',   value:'grey',   text:'grey'},
            {key:'black',  value:'black',  text:'black'},
        ],
        paginateChecked:false
    };

    static contextType= adminContextApi;



    handleChange = (e, { value }) =>{
        const selectedValue={};
        selectedValue[value] = true;
        this.setState({ selectedOptions: selectedValue });
    };

    handleColorChange=(e,{value})=> this.setState({selectedColor : value});

    render() {

        const {header1,header2,options,selectedOptions,colors,selectedColor,paginateChecked} = this.state;

        const {data,activePage,pageSize} = this.context.state;
        const {totalCount} = this.context.getPageData();

        return (
            <Fragment>
                <h3>تنظیمات جدول کاربران</h3>
                <Grid.Row>
                    <Grid.Column computer={8} tablet={8} mobile={16}>
                        <Input
                            label={"عنوان یک"}
                            labelPosition={"left"}
                            size={"small"}
                            type={"text"}
                            required
                            value={header1}
                            onChange={ (e,{value})=> this.setState({header1:value}) }
                            className={"inputHeaderTable"}
                        />
                        <Input
                            label={"عنوان دو"}
                            labelPosition={"left"}
                            size={"small"}
                            type={"text"}
                            required
                            value={header2}
                            onChange={ (e,{value})=> this.setState({header2:value}) }
                            className={"inputHeaderTable"}
                        />

                        <div className={"mainDivDropDown"}>
                            <h5>انتخاب نوع جدول</h5>
                            <Dropdown
                                placeholder='انتخاب نوع جدول'
                                className={"dropdownTableOptions"}
                                fluid
                                search
                                selection
                                options={options}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className={"dropdownTableOptions"}>
                            <h5>انتخاب رنگ جدول</h5>
                            <Dropdown
                                placeholder='انتخاب رنگ جدول'
                                className={"dropdownTableOptions"}
                                fluid
                                search
                                selection
                                options={colors}
                                onChange={this.handleColorChange}
                            />
                        </div>

                        <div >
                            <Checkbox
                                checked={paginateChecked}
                                label='صفحه بندی نتایج'
                                onChange={()=> this.setState({paginateChecked:!paginateChecked})}
                            />
                        </div>

                    </Grid.Column>

                    <Grid.Column computer={8} tablet={8} mobile={16}>
                        <Table
                            className={"mainTableSetting"}
                            {...selectedOptions}
                            color={selectedColor}
                        >
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>{header1? header1 : "لطفا از سمت راست عنوان را وارد نمایید"}</Table.HeaderCell>
                                    <Table.HeaderCell>{header2? header2 : "لطفا از سمت راست عنوان را وارد نمایید"}</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    data.map(user=>
                                        <Table.Row key={user.name}>
                                            <Table.Cell>{user.name}</Table.Cell>
                                            <Table.Cell>{user.email}</Table.Cell>
                                        </Table.Row>
                                    )
                                }
                            </Table.Body>

                            {
                                paginateChecked?
                                    <Table.Footer>
                                        <Table.Row>
                                            <Table.HeaderCell colSpan='3'>
                                                <Pagination
                                                    totalPages={Math.ceil(totalCount/pageSize)}
                                                    onPageChange={this.context.handlePaginationChange}
                                                    activePage={activePage}
                                                    pointing
                                                    secondary
                                                />
                                            </Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Footer>
                                    : null
                            }
                        </Table>

                    </Grid.Column>
                </Grid.Row>
            </Fragment>
        )
    }
}

export default ModalTable;