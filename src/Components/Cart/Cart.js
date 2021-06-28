import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
const Cart = ({cart,setCart}) => {
  const [total, setTotal] = useState(0);
  console.log(cart);
  const placeOrder = () => {
    // console.log({cart})
    const data = {
      totalPrice: total,
      products: cart,
    };
    axios
      .post("http://localhost:5000/place-order", data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  // const removeProduct = (productKey) => {
  //   const newCart = cart.map((pd)=> pd.key !== productKey);
  //   setCart(newCart);
  // };

  return (
    <div id="cart">
      {cart.map((pd) => (
        // <div><h2>{pd.title}</h2></div>
        <CartItem
          total={total}
          setTotal={setTotal}
          title={pd.title}
          unitPrice={pd.unitprice}
          cart={cart}
          setCart={setCart}
        />
      ))}
      <div id="orderNow">
        <h3>
          Total invoiced amount: $<span>{total}</span>
        </h3>
        <Link to="/order-successful">
          <button onClick={placeOrder} class="btn">
            Procced to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
