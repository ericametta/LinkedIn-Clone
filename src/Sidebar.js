import { Avatar, Icon } from "@mui/material";
import React from "react";
import "./Sidebar.css"
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Sidebar = () => {

    const events = (eventname) => (
        <div className="sidebar-event">
            <p>{eventname}</p>
        </div>
    );

    const recentItem = (topic) => (
        <div className="sidebar-recent-item">
            <span className="sidebar-hash">#</span>
            <p>{topic}</p>
        </div>
    );

    return ( 
        <div className="sidebar">
            <div className="sidebar-top">
                <img src="https://images.unsplash.com/photo-1676798086267-06586b1e993c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNnxpVUlzblZ0akIwWXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" alt=""/>
                <Avatar className="sidebar-avatar"/>
                <h2>Erica Metta</h2>
                <div className="sidebar-top-h4">
                    <h4>ericamettaz@gmail.com</h4>
                    <h4>Software Engineer</h4>
                </div>
                
            </div>

            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who's viewed your profile</p>
                    <p className="sidebar-stat-num">121</p>
                </div>
                <div className="sidebar-stat">
                    <p>Impressions of your post</p>
                    <p className="sidebar-stat-num">105</p>
                </div>
            </div>

            <div className="sidebar-items">
                <BookmarkIcon className="sidebar-items-icon" />
                <p>My items</p>
            </div>

            <div className="sidebar-bottom">
                <p>Recent</p>
                <div className="sidebar-bottom-events">
                {events("Campus")}
                {events("Stay Ahead")}
                </div>
                {recentItem("reactjs")}
                {recentItem("clones")}
                {recentItem("AIin2023")}
            </div>
        </div>


     );
}
 
export default Sidebar;