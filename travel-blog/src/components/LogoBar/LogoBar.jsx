import React from "react";
import logo from "../../Images/logo.png";
import "./logobar.css";

const LogoBar = () => {
  return (
    <div className="logobar">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default LogoBar;
