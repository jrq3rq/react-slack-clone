import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>James Program</h2>
          <h3>
            <FiberManualRecordIcon />
            James Santos
          </h3>
        </div>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption title="Sample" />
    </div>
  );
}

export default Sidebar;
