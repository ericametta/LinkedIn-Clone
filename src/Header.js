import React from 'react';
import "./Header";
import SearchIcon from '@mui/icons-material/Search';
import "./icons";

function Header() {
    return (
        <div className="header">
            <h1>This is a Header</h1>

            <div className="header__left">
                <img src=" " alt="logo" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

        </div>
    )
}

export default Header
