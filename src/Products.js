import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";

const Products = () => {
  const products = productsData.map(product => {
    return (
      <div key={product.id} className="productCard .col-3">
        <h3>
          <Link to={`/products/${product.id}`}>{product.name}</Link>
        </h3>
          <Link to={`/products/${product.id}`}>
            <img src={product.img} alt=""/>
          </Link>
        <p>Price: ${product.price}</p>
      </div>
    );
  });

  return (
    <>
      <div className="productsHeader">
        <p className="searchbar col-2">Search...</p>
      </div>
      <div className="products">
        {products}
      </div>
    </>
  );
};

export default Products;
