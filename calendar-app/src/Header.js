import React from 'react';
import './Header.css';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            <div className = "header__left">
                <EventAvailableIcon className="header__calendarIcon" />
                <h1>Calendar</h1>
            </div>

            <div className="header__right">
                <Avatar 
                    alt="Enrique Teles"
                    src="https://avatars.githubusercontent.com/u/39441836?v=4"
                />
                <p>Enrique Teles</p>
                <ExpandMoreIcon />
            </div>

        </div>
    )
}

export default Header;