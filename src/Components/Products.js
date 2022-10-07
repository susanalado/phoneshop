import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import TextField from "@mui/material/TextField";

function Products() {
  const [productsAPI, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

   useEffect(() => {
    if (window.localStorage !== undefined){ 
      const products = JSON.parse(window.localStorage.getItem('products'));
      if (products !== null) {
        setProducts(products);
        setFilteredProducts(products);
      } else {
      fetch(`/api/product`)
         .then((response) => response.json())
         .then((data) => {
            localStorage.setItem('products', JSON.stringify(data));
            setProducts(data);
            setFilteredProducts(data);
         })
         .catch((err) => {
            console.log(err.message);
         })}
    }
  }, []);

  const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      // Turn input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);

      if (lowerCase !== '') {
        setFilteredProducts(
          productsAPI?.filter(product => {
          //if no input the return the original
          if (inputText === '' ||
            product.model?.toLowerCase().includes(inputText) ||
            product.brand?.toLowerCase().includes(inputText) 
            ) 
            {
              return product;
            }
          else return undefined
          })
        );
      } else {
        setFilteredProducts(productsAPI)
      }
   };

  const products = filteredProducts.map(product => {
    return (
      <div className="product" key={product.id}>
        <Link to={`/products/${product.id}`}>
          <div  className="productCard .col-3">
              <h3>
                {product.name}
              </h3>
              <img src={product.imgUrl} alt=""/>
            
            <p>Brand: {product.brand}</p>
            <p>Model: {product.model}</p>
            <p>Price: ${product.price}</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <TextField
          id="outlined-basic"
          className="searchbar"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      <div className="products">
        {products}
      </div>
    </>
  );
};

export default Products;
