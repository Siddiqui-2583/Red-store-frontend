import React from 'react';
// import {Link} from 'react-router-dom'
import './Header.css'
import logo from "../../Images/logo.png";
import cart from "../../Images/cart.png";
const Header = ({ setIsOpen }) => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
      <img onClick={() => setIsOpen(true)} className="cartImg" src={cart} alt="cart" />
    </div>
  );
};

export default Header;