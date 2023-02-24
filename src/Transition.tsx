import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// import component
import MainPage from "./pages/MainPage/MainPage";

function Transition() {
  const location = useLocation();
  return (
    <div>
      <TransitionGroup className="transitions-wrapper">
        <Routes location={location}>
          <Route path="/" element={<MainPage />}></Route>
          {/* <Route path="/login" element={<LoginPage />}></Route> */}
        </Routes>
      </TransitionGroup>
    </div>
  );
}

export default Transition;
