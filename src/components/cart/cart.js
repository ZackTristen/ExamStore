import React, { Component } from 'react';
import CartItem from '../cart-item/cart-item'

class Cart extends Component {

    
    render() {
        
        return (
          <div>
              <span>Корзина покупок</span>
              <ul>
                  <CartItem />
                  <CartItem/>
                  <CartItem/>
                  <CartItem/>
                  <CartItem/>
              </ul>
          </div>
        )

    }
}

export default Cart;