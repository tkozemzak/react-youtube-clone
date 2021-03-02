import React from 'react'

const SidebarRow = ({ Icon, title }) => {
    return (
        <div className="sidebar_sidebar-row">
            <Icon/>
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarRow
