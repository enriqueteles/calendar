import React from 'react';
import { Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';

import Auth from '../../auth';
import routes from '../../routes';

import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import './Header.css';

function Header() {
    let userData = JSON.parse(localStorage.getItem('userData'));

    const menu = (
        <Menu>
          <Menu.Item>
            <Link to={routes.login} onClick={() => {Auth.logOut()}}>Logout</Link>
          </Menu.Item>
        </Menu>
      );
    
    return (
        <div className="header">
            <div className = "header__left">
                <EventAvailableIcon className="header__calendarIcon" />
                <h1>Calendar</h1>
            </div>

            <div className="header__right">
                <Avatar 
                    alt={userData ? userData.name : ""}
                    src="https://avatars.githubusercontent.com/u/39441836?v=4"
                />
                <p>{userData ? userData.name : ""}</p>
                <Dropdown overlay={menu}>
                    <ExpandMoreIcon />
                </Dropdown>
            </div>

        </div>
    )
}

export default Header;