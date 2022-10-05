import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";

function Products() {
  const products = productsData.map(product => {
    return (
      <div className="product" key={product.id}>
        <Link to={`/products/${product.id}`}>
          <div  className="productCard .col-3">
              <h3>
                {product.name}
              </h3>
              <img src={product.img} alt=""/>
            
            <p>Brand: {product.brand}</p>
            <p>Price: ${product.price}</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <div className="productsHeader">
        <input className="searchbar col-2"/>
      </div>
      <div className="products">
        {products}
      </div>
    </>
  );
};

export default Products;
