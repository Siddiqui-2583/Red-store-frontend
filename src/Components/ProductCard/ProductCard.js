import React from "react";
import "./ProductCard.css";
import product1  from '../../Images/product-1.jpg'
const ProductCard = () => {
  return (
    <div className="card">
          <img src={ product1} alt="" />
      <div className="container">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect Engineer</p>
      </div>
    </div>
  );
};

export default ProductCard;
