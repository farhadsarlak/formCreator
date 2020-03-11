import React from 'react';
import {Menu,Image} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import './AdminSidebar.css';

const AdminSidebar = () =>{

    return(
        <Menu.Item>
            <Menu.Item>
                <Image
                    src={"/assets/images/admin.png"}
                    size={"tiny"}
                    centered
                    as={Link}
                    to={"/admin"}
                />
            </Menu.Item>

            <Menu.Item>
                <Menu.Menu as={Link} to={"/admin/formsSetting"} className={"MenuItemLink"}>
                    تنظیم و ایجاد فرم
                </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
                <Menu.Menu as={Link} to={"/admin/usersSetting"} className={"MenuItemLink"}>
                    تنظیمات کاربران
                </Menu.Menu>
            </Menu.Item>

            <Menu.Item>
                1
            </Menu.Item>
        </Menu.Item>

    )

};

export default AdminSidebar;