import React from 'react';
import "./Header";
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img className="" src="icons/linkedin.png" alt="logo" />

                <div className="header-search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />

                {/*Come back here to edit profile picture tears in my eyes as i type */}
                <HeaderOption avatar="https://www.dropbox.com/s/bdylqvpvswfv9ma/A4A07569-6326-4723-B12D-A7A0937D2B30.jpg?dl=0" title="Me"/>
            </div>
        </div>
    )
}

export default Header
