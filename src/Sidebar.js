import React from 'react'

import './Sidebar.css'
import SidebarRow from './SidebarRow'

import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AddIcon from '@material-ui/icons/Add';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Sidebar() {
    return (
        <div className = "sidebar">
            <SidebarRow selected Icon = {HomeIcon} title = "Home" />
            <SidebarRow Icon = {ExploreIcon} title = "Explore" />
            <SidebarRow Icon = {SubscriptionsIcon} title = "Subscription" />
            <hr />
            <SidebarRow Icon = {VideoLibraryIcon} title = "Library" />
            <SidebarRow Icon = {HistoryIcon} title = "History" />
            <SidebarRow Icon = {PlayArrowIcon} title = "Your videos" />
            <SidebarRow Icon = {WatchLaterIcon} title = "watch later" />
            <SidebarRow Icon = {AddIcon} title = "Your clips" />
            <SidebarRow Icon = {KeyboardArrowDownIcon} title = "Show more" />
            <hr />
        </div>
    )
}

export default Sidebar
