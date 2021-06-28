import React from "react";
import "./ProductCard.css";
import product1 from "../../Images/product-1.jpg";
const ProductCard = ({ product,handleAddToCart }) => {
  // let product = {
  //   title: "Maron T-shirt",
  //   unitPrice: "50",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  // };
  const {title, unitprice} = product
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <div className="card">
      <img src={product1} alt="" />
      <div className="container">
        <h2>{title}</h2>
        <h3>
          $<span>{unitprice}</span>
        </h3>
        <p>{description}</p>
        <button
          onClick={() => handleAddToCart(product)}
          className="btn"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
