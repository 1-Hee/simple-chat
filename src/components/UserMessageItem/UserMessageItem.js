import { useState } from "react";

// import css
import "./UserMessageItem.css";

const UserMessageItem = () => {
  return (
    <div className="user-message-item">
      <div className="user-img" style={{backgroundImage:`url(${"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUn3-sRXuwSy6HrS9h6kV5RLJ4UYl1OeM5Gw&usqp=CAU"})`}}></div>
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
