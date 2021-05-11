import React from 'react';
import './Sidebar.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__up">
                <HomeOutlinedIcon className={"sidebar__icon selected"} />
                <PeopleAltOutlinedIcon className={"sidebar__icon"} />
                <NotificationsNoneOutlinedIcon className={"sidebar__icon"} />
                <SettingsOutlinedIcon className={"sidebar__icon"} />
            </div>

            <div className="sidebar__down">
                <MoreHorizOutlinedIcon className={"sidebar__icon"} />
            </div>

        </div>
    )
}

export default Sidebar
