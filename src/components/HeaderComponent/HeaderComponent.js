import { useState } from "react";

// import css
import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <>
      <div className="top-bar">
        <div className="user-profile"></div>
        <div className="title-div">
          <p>title-text</p>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
