import React , {Component} from 'react';
import './AdminHomePage.scss';

import {
    Container ,
    Grid ,
    Dimmer ,
    Loader ,
    Label ,
    Icon ,
    Popup ,
    Button ,
    Modal ,
    Image ,
    Header
} from "semantic-ui-react";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsUsersFetching , selectUsersData} from "../../../../redux/user/userSelector";
import {getAllUser} from "../../../../redux/user/userAction";
import * as PropTypes from "prop-types";
import config from '../../../../config.json';
import {paginate} from "../../../../utils/paginate";
import ModalSettings from "../../components/modals/ModalSettings";
import ModalData from "../../components/modals/ModalData";



class AdminHomePage extends Component {

    state = {
        data: [] ,
        activePage: 1 ,
        pageSize: 15 ,
        showOptions: false,
        openModalSettings:false,
        openModalData:false
    };

    componentDidMount() {
        let {fetchUsers,users} = this.props;
        fetchUsers(config.api_users);
        this.setState({data:users})
    }

    handlePaginationChange = (e, { activePage }) => this.setState({ activePage });

    handleShowOptions= () =>{
        this.setState({showOptions: true})
    };

    handleHideOptions=() =>{
        this.setState({showOptions:false})
    };

    getPageData = () => {
        let {isFetching} = this.props;
        if(isFetching === false) return;
        const { pageSize, activePage, data: allUsers } = this.state;
        const users = paginate(allUsers, activePage, pageSize);

        return {
            totalCount: allUsers.length,
            data: users
        };
    };


    render() {
        let {isFetching} = this.props;
        const { activePage,pageSize,showOptions,openModalSettings,openModalData} = this.state;
        const { totalCount, data } = this.getPageData();

        if (isFetching === false) return <Dimmer><Loader> درحال بارگزاری ... </Loader></Dimmer>;

        const closeModal=()=> {
            this.setState({openModalSettings: false,openModalData:false});
        };

        return (
            <Container fluid className={"mainContainerHomePage"}>
                <Grid padded>
                    <Grid.Row>
                        <Grid.Column
                            className={"addElementStyle"}
                            onMouseEnter={this.handleShowOptions}
                            onMouseLeave={this.handleHideOptions}
                        >
                            {showOptions ?
                                <Label attached={"top left"} basic >
                                    <Popup
                                        content={"تنظیمات المنت"}
                                        trigger={
                                            <Icon
                                                onClick={()=>this.setState({openModalSettings:true})}
                                                name={"setting"}
                                                color={"violet"}
                                            />
                                        }
                                    />

                                    <Popup
                                        content={"اتصال داده"}
                                        trigger={
                                            <Icon
                                                name={"server"}
                                                color={"violet"}
                                                onClick={()=>this.setState({openModalData:true})}
                                            />
                                        }
                                    />
                                </Label>
                                :
                                null
                            }

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Modal
                    open={openModalSettings? openModalSettings : openModalData}
                    onClose={closeModal}
                    className={"modalTextAlign"}
                >
                    {openModalSettings? <ModalSettings/> : <ModalData/>}
                </Modal>
            </Container>
        )
    }
}

AdminHomePage.propTypes = {
    users: PropTypes.any ,
    isFetching: PropTypes.any ,
    fetchUsers: PropTypes.any
};

const mapStateToProps= createStructuredSelector({
   users     : selectUsersData,
   isFetching: selectIsUsersFetching
});

const mapDispatchToProps = dispatch =>({
   fetchUsers : (url) => dispatch(getAllUser(url))
});

export default connect(mapStateToProps,mapDispatchToProps)(AdminHomePage);