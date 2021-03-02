import { useState } from 'react'
import '../Styles/Header.css'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom"


const Header = () => {

    const [inputSearch, setInputSearch ] = useState('');

    return (
        <div className="header">
            <div className="header_left">
            <MenuIcon/>
            <Link to="/" onClick={e => setInputSearch('')}>
            <img className="header_logo" src="https://i.pinimg.com/originals/31/23/9a/31239a2f70e4f8e4e3263fafb00ace1c.png"alt=""/>
            </Link>
            
            
            </div>
            <div className="header_input">
            <input onChange={e => setInputSearch(e.target.value)} type="text" placeholder="Search" value={inputSearch}/>
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header_inputButton"/>
            </Link>
            
            </div>

            <div className="header_icons">
            <VideoCallIcon className="header_icon"/>
            <AppsIcon className="header_icon"/>
            <NotificationsIcon className="header_icon"/>
            <Avatar
                alt="Tim"
                src="https://avatars.githubusercontent.com/u/37643202?s=460&u=fe6687e49e5b3cbfebd985ab52c2167744ec1a85&v=4"
                />
            </div>
            
        </div>
    )
}

export default Header
