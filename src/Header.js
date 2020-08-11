import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          // alt={user?.displayName}
          alt="James Bond"
          // src={user?.photoURL}
          src=""
        />
        <AccessTimeIcon />
        {/* avatar for logged in user */}
        {/* time icon */}
      </div>
      <div className="header__search">
        <SearchIcon />
        {/* seach icon */}
        <input placeholder="Search J programs" />
        {/* input */}
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
        {/* healp icon */}
      </div>
    </div>
  );
}

export default Header;
