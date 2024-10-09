import React from "react";
import Navbar from "./Navbar";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header id="header">
        <HeaderTop />
        <div className="container">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="/">
                <img src="img/logo.png" alt="" title="" />
              </a>
            </div>
            <Navbar />
          </div>
        </div>
    </header>
  );
};

export default Header;
