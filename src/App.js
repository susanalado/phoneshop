import React from "react";
import Navbar from "./Navbar";

function App (){    
  var cartCount = 0;
  const  [cart, setCart] = React.useState([])
  const addToCart = () => {
    cartCount++;
  }

  return (
    <div>
      <Navbar
      cart={cart}
      addToCart={addToCart}/>
        <div className="cart-value">{cartCount}</div>
    </div>
  )
}


export default App;