import React from "react";
import { Link, Route, Switch, BrowserRouter as Router  } from "react-router-dom";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import routes from "./routes";
import Breadcrumbs from "./Breadcrumbs";

const Navbar = ({ cart, addToCart }) => (

  (<Router>
          {routes.map(({ path }, key) => (
            <Route
              exact
              path={path}
              key={key}
              render={props => {
                const crumbs = routes
                  // Get all routes that contain the current one.
                  .filter(({ path }) => props.match.path.includes(path))
                  // Swap out any dynamic routes with their param values.
                  .map(({ path, ...rest }) => ({
                    path: Object.keys(props.match.params).length
                      ? Object.keys(props.match.params).reduce(
                          (path, param) =>
                            path.replace(`:${param}`, props.match.params[param]),
                          path
                        )
                      : path,
                    ...rest
                  }));
                  
                return (
                  <div>
                    <div className="header">
                      <nav className=" col-10">
                        <Link to="/">Phone Shop</Link>
                        <Breadcrumbs crumbs={crumbs} />
                      </nav>
                    </div>
                  
                  <Switch>
                    <Route exact path="/">
                      <Products
                         />
                    </Route>
                    <Route path="/products/:productId">
                      <ProductDetail
                      cart={cart} 
                      addToCart={addToCart}
                       />
                    </Route>
                  </Switch>
                </div>
                );
              }}
            />
          ))}
    </Router>
  )
);

  
export default Navbar;