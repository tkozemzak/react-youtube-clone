import React from 'react'
import '../Styles/Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'


const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow Icon={HomeIcon} title="Home"/>
            <SidebarRow Icon={WhatshotIcon} title="Trending"/>
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
        </div>
    )
}

export default Sidebar
