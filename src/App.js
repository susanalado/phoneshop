import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import BuyPage from "./BuyPage";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Phone Shop</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
        <Route path="/buyPage/:productId">
          <BuyPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
