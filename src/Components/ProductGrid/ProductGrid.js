import React from 'react';
import './ProductGrid.css'
import ProductCard from '../ProductCard/ProductCard'
const ProductGrid = ({ products,handleAddToCart }) => {
    
    return (
      <div className="product-grid">
        {products.map((pd) => (
          <ProductCard product={pd} handleAddToCart={handleAddToCart}/>
        ))}
      </div>
    );
};

export default ProductGrid;