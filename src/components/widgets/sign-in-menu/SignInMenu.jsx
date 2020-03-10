import React from 'react';
import {Dropdown} from "semantic-ui-react";
import {Link} from "react-router-dom";

const SignInMenu = ({currentUser,handleSignOut}) =>{

    const isAdmin =localStorage.getItem("token");
    return(
      <Dropdown
          text={currentUser}
          icon={"user outline"}
          floating
          button
      >
          <Dropdown.Menu>
              <Dropdown.Item
                  icon={isAdmin? "user secret" : "user outline"}
                  text={isAdmin? " پنل مدیریت ": " پروفایل "}
                  as={Link}
                  to={isAdmin? "/admin" : "/"}
              />
              <Dropdown.Item icon={"sign-out alternate"} text={"خروج"} onClick={handleSignOut}/>
          </Dropdown.Menu>

      </Dropdown>
    );
};

export default SignInMenu;