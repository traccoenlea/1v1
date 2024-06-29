import React from "react";
import home from "../assets/img/home.png";
import classement from "../assets/img/group.png";
import ball from "../assets/img/ball.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  function new1v1() {
    alert("1v1 en couuuuuuuuuuuuuurs");
  }
  return (
    <div className="flex jce navContainer">
      <NavLink to="/" className="imgContainer flex jcc">
        <img src={home} alt="home icon" />
        {/* <h5>Classement</h5> */}
      </NavLink>
      <div className="imgContainer flex jcc" onClick={new1v1}>
        <img src={ball} alt="basketball icon" />
        {/* <h5>Classement</h5> */}
      </div>
      <NavLink to="/classement" className="imgContainer flex jcc">
        <img src={classement} alt="classement icon" />
        {/* <h5>Classement</h5> */}
      </NavLink>
    </div>
  );
};

export default Nav;
