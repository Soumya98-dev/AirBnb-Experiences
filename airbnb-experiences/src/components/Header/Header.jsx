import React from "react";
import './Header.css';

function Header(){
    return (
      <header className="header-part">
        <img src="public/photo-grid.png"></img>
        <h1 className="header-h1">Online Experiences</h1>
        <p className="header-p">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </header>
    );
}

export default Header;