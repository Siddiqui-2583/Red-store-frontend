import React from 'react';
import './ProductGrid.css'
import ProductCard from '../ProductCard/ProductCard'
const ProductGrid = () => {
    return (
      <div className="product-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    );
};

export default ProductGrid;