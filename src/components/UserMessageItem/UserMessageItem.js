import { useState } from "react";

// import css
import "./UserMessageItem.css";

const UserMessageItem = () => {
  return (
    <div className="user-message-item">
      <div className="user-img"></div>
      <div className="message-info-div">
        <div className="user-name-div">
          <p>Sophia</p>
        </div>
        <div className="user-message-div">
          <p>Hello Hey There?</p>
        </div>
      </div>
    </div>
  );
};

export default UserMessageItem;
