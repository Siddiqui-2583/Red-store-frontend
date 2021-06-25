import React, { useState } from "react";

import "./Cart.css";
import CartItem from "../CartItem/CartItem";
const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);
  return (
    <div id="cart">
      <CartItem subtotal={subtotal} setSubtotal={setSubtotal} unitPrice={50} />
      <CartItem subtotal={subtotal} setSubtotal={setSubtotal} unitPrice={100} />
      <CartItem />
      <div id="orderNow">
        <h2>
          Subtotal: $<span>{subtotal}</span>
        </h2>
        <button class="btn">Order Now</button>
      </div>
    </div>
  );
};

export default Cart;
