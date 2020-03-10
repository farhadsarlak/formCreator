import React from 'react';
import './Header.css';

import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {Menu , Image , Button , Icon} from "semantic-ui-react";
import SignInMenu from "../../widgets/sign-in-menu/SignInMenu";
import {logoutAction} from "../../../redux/user/userAction";



const Header = ({currentUser,authenticated,logoutAct}) => {

    const handleSignOut = () =>{
      localStorage.removeItem('token');
      logoutAct();
      window.location="/";
    };

    return(
        <Menu
            secondary
            fixed={"top"}
            size={"large"}
            inverted
            color={"violet"}
            className={"mainHeader"}
        >
            <Menu.Item>
                <Image as={Link} to={'/'} src={"/assets/images/editor.png"} size={"tiny"}/>
            </Menu.Item>

            <Menu.Item position={"left"}>
                {
                    authenticated ?
                        <SignInMenu currentUser={currentUser} handleSignOut={handleSignOut}/>
                        :
                        <Button inverted size={"mini"} icon labelPosition={"right"} as={Link} to={"/signInSignOut"}>
                            ورود / عضویت
                            <Icon name={"user outline"}/>
                        </Button>
                }

            </Menu.Item>

        </Menu>
    )

};

const mapStateToProps = state =>({
    currentUser   : state.user.currentUser,
    authenticated : state.user.authenticated
});

const mapDispatchToProps= dispatch => ({
   logoutAct : ()=> dispatch(logoutAction())
});


export default connect(mapStateToProps,mapDispatchToProps)(Header);