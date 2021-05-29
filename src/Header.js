import React from 'react';
import './Header.css';

import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';

import SearchIcon from '@material-ui/icons/Search';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className = "header">
            <div className="header__left">
                <MenuIcon className = "icons" />
                <YouTubeIcon className = "header__logo" />
                <h1>YouTube</h1>
            </div>

            <div className="header__input">
                <input type="text" placeholder = "Search" />
                <SearchIcon className = "header__inputbutton" />
            </div>

            <div className="header__icons">
                <VideoCallIcon className = "icons" />
                <AppsIcon className = "icons" />
                <NotificationsIcon className = "icons" />
                <AccountCircleIcon className = "icons" />
            </div>
        </div>
    )
}

export default Header
