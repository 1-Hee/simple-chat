import { useState } from "react";

// import component
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import BottomNav from "../../components/BottomNav/BottomNav";
import UserMessageItem from "../../components/UserMessageItem/UserMessageItem";
import SearchBox from "../../components/SearchBox/SearchBox";

// import css
import "./MainPage.css";

const MainPage:Function = ():JSX.Element => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="main-container">
        <SearchBox />
        <UserMessageItem />
      </div>
      <BottomNav></BottomNav>
    </>
  );
};

export default MainPage;
