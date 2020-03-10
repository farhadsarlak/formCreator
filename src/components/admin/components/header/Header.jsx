import React , {Component} from 'react';
import {Icon , Menu,Sidebar , Container,Segment,Dropdown} from "semantic-ui-react";

import {logoutAction} from "../../../../redux/user/userAction";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import * as PropTypes from "prop-types";

import AdminSidebar from "../sidebar/AdminSidebar";



class Header extends Component {

    state = {};

    handleSidebarHide = () => this.setState({ sidebarOpened: false });

    handleToggle = () => this.setState({ sidebarOpened: true });

    render() {

        let {currentUser , logoutAct,history} = this.props;
        const { sidebarOpened } = this.state;

        const handleSignOut = () => {
            localStorage.removeItem('token');
            logoutAct();
            history.push('/');
        };


        return (
            <Container fluid>
                <Sidebar
                    as={Menu}
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                    direction={"right"}
                    animation={"overlay"}
                    size={"large"}
                >
                    <AdminSidebar/>
                </Sidebar>
                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment style={{padding: '1em 0em' , marginTop: '50px'}} vertical>
                        <Container className={"mainContentAdmin"} fluid>
                            <Menu fixed={"top"} size={"large"} inverted color={"violet"}>

                                <Menu.Item onClick={this.handleToggle}>

                                    <Icon name={"sidebar"}/>

                                </Menu.Item>

                                <Menu.Item position='left'>
                                    <Menu.Menu>
                                        <Dropdown item pointing={"top left"} icon={"user outline"} text={currentUser}>
                                            <Dropdown.Menu>
                                                <Dropdown.Item>
                                                    <Icon name={"setting"}/>&nbsp;&nbsp;
                                                    تنظیمات
                                                </Dropdown.Item>
                                                <Dropdown.Item>
                                                    <Icon name={"list"}/>&nbsp;&nbsp;
                                                    منو بعدی
                                                </Dropdown.Item>
                                                <Dropdown.Item onClick={handleSignOut}>
                                                    <Icon name={"sign out"}/>&nbsp;&nbsp;
                                                    خروج
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Menu.Menu>
                                </Menu.Item>

                            </Menu>
                        </Container>
                    </Segment>
                </Sidebar.Pusher>
            </Container>

        )
    }
}

Header.propTypes = {
    currentUser: PropTypes.any ,
    logoutAct: PropTypes.func
};

const mapStateToProps = state =>({
    currentUser   : state.user.currentUser,
});

const mapDispatchToProps= dispatch => ({
    logoutAct : ()=> dispatch(logoutAction())
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));