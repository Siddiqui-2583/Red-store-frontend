import React from "react";
import "./ProductCard.css";
import product1 from "../../Images/product-1.jpg";
const ProductCard = () => {
  return (
    <div className="card">
      <img src={product1} alt="" />
      <div className="container">
        <h2>Maron T-shirt</h2>
        <h3>$100</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="btn">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
