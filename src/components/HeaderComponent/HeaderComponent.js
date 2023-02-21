import { useState } from "react";

// import img 


// import css
import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <>
      <div className="top-bar">
        <div className="user-profile" style={{backgroundImage:`url(${"https://t1.daumcdn.net/cfile/tistory/993376345A72B83035"})`}}></div>
        <div className="title-div">
          <p>speech</p>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
