import React, { useState } from 'react';
import './Header.css';

import YouTubeIcon from '@material-ui/icons/YouTube';
import MenuIcon from '@material-ui/icons/Menu';

import SearchIcon from '@material-ui/icons/Search';

import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';

function Header() {

    const [inputSearch, setInputSearch] = useState("")

    return (
        <div className = "header">
            <div className="header__left">
                <MenuIcon className = "icons" />
                <Link to = "/">
                    <YouTubeIcon className = "header__logo" />

                </Link>
            </div>

            <div className="header__input">
                <input onChange = {e => setInputSearch(e.target.value)} value = {inputSearch} type="text" placeholder = "Search" />

                <Link to = {`/search/${inputSearch}`}>
                    <SearchIcon className = "header__inputbutton" />
                </Link>
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
