import React from 'react';
import Navbar from "./Components/Navbar";
import {Text} from 'react-native'

function App (){    
  let [cartCount, setCartCount] = React.useState(0);

  const addToCart = (count) => {
    setCartCount(count);
  }

  return (
    <div>
      <Navbar
      addToCart={addToCart}/>
        <img className="cart-img" src={require("./utils/img/cart.png")} alt="Cart"/>
        <div className="cart-value">
          <Text>{cartCount}</Text>
        </div>
    </div>
  )
}


export default App;