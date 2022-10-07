import React, { Component } from "react";

export class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          cartDetailRender: false
        };
    }

      
    render() {
        const { itemCount } = this.props;
    
        return(
            <div className="cart">
                <i className="fas fa-cart-arrow-down product-cart-icon" />
                <div className="cart-value">{itemCount}</div>
            </div>
        )
    }
}

export default Cart