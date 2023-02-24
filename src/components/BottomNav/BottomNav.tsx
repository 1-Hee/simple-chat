import { useState } from "react";

// import img
import messageIcon from "../../assets/img/message-icon.png"
import userIcon from "../../assets/img/user-icon.png";
import alarmIcon from "../../assets/img/alarm-icon.png";

// import css
import "./BottomNav.css";

const BottomNav:Function = ():JSX.Element => {
  return (
    <>
      <div className="bottom-bar ">
        <div className="chat-btn">
          <div className="chat-icon" style={{backgroundImage:`url(${messageIcon})`}} />
        </div>
        <div className="user-btn">
          <div className="user-icon" style={{backgroundImage:`url(${userIcon})`}} />
        </div>
        <div className="alarm-btn">
          <div className="alarm-icon" style={{backgroundImage:`url(${alarmIcon})`}} />
        </div>
      </div>
    </>
  );
};

export default BottomNav;
