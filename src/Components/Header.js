import React from 'react'
import '../Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Avatar } from '@material-ui/core';


const Header = () => {
    return (
        <div className="header">
            <MenuIcon/>
            <img className="header_logo" src="https://i.pinimg.com/originals/31/23/9a/31239a2f70e4f8e4e3263fafb00ace1c.png"alt=""/>
            <input type="text"/>
            <SearchIcon/>
            <VideoCallIcon/>
            <AppsIcon/>
            <NotificationsIcon/>
            <Avatar
                alt="Tim"
                src="https://avatars.githubusercontent.com/u/37643202?s=460&u=fe6687e49e5b3cbfebd985ab52c2167744ec1a85&v=4"
                />
        </div>
    )
}

export default Header
