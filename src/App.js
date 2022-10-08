import React from 'react';
import Navbar from "./Components/Navbar";
import { Text } from 'react-native';
import cartImg from "./utils/img/cart.png"; 

function App (){    
  let [cartCount, setCartCount] = React.useState( () => {
    // Persist cart items count
    if (window.localStorage !== undefined){ 
      const cartCount = window.localStorage.getItem('cartCount');
      if (cartCount !== null) 
          return cartCount
      else
        return 0
  }});

  const addToCart = (count) => {
    // Update cart items count with the API returned value
    localStorage.setItem('cartCount', count)
    setCartCount(count);
  }

  var hours = 1; // Clear the localStorage after 1 hour 
  var now = new Date().getTime();
  var setupTime = localStorage.getItem('setupTime');
  if (setupTime == null) {
      localStorage.setItem('setupTime', now)
  } else {
      if(now-setupTime > hours*60*60*1000) {
          localStorage.clear()
          localStorage.setItem('setupTime', now);
      }
  }

  return (
    <div>
      <Navbar
      addToCart={addToCart}/>
        <img className="cart-img" src={cartImg} alt="Cart"/>
        <div className="cart-value">
          <Text>{cartCount}</Text>
        </div>
    </div>
  )
}


export default App;