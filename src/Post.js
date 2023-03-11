import React from "react";
import { Avatar } from "@mui/material";
import "./Post.css";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InputOptions from "./InputOptions";

const Post = ({ name, description, message, photoURL }) => {
    return ( 
        <div className="post">
            <div className="post-header">
                <Avatar />
                <div className="post-info">
                <h2>{name}</h2>
                <p>{description}</p>
                </div>
            </div>

            <div className="post-body">
                <p>{message}</p>
                {photoURL && <img src={photoURL} alt=""/>}
            </div>

            <div className="post-buttons">
                <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
                <InputOptions Icon={CommentOutlinedIcon} title="Comment" color="gray"/>
                <InputOptions Icon={ShareOutlinedIcon} title="Repost" color="gray"/>
                <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray"/>
            </div>
        </div>
     );
}
 
export default Post;