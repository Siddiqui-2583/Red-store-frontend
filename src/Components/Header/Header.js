import React from 'react';
import './Header.css'
import logo from "../../Images/logo.png";
import cart from "../../Images/cart.png";
const Header = () => {
    return (
      <div className="header">
        <img className="logo" src={logo} alt="logo" />
        <img className="cartImg" src={cart} alt="cart" />
      </div>
    );
};

export default Header;