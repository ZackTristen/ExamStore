import React, { Component } from 'react';
// import CartItem from '../cart-item/cart-item'
import './cart-list.css'

class CartList extends Component {



    render() {

        return (
            <div className="shoping-cart">
             <table>
             <caption><h3>Корзина покупок</h3></caption>
                 <thead>
                     <tr>
                     <th>#</th>
                     <th>Название</th>
                     <th>Цена</th>
                     <th>Количество</th>
                     <th>Действия</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <td>1</td>
                         <td>Red Dead Redemtion 2</td>
                         <td>12$</td>
                         <td>4</td>
                         <td>
                         <button>+</button>
                         <button>-</button>
                         <button>удалить все</button>
                         </td>
                     </tr>
                     <tr>
                         <td>2</td>
                         <td>Mass effect 3</td>
                         <td>14$</td>
                         <td>2</td>
                         <td>
                         <button>+</button>
                         <button>-</button>
                         <button>удалить все</button>
                         </td>
                     </tr>
                    
                 </tbody>
                 
             </table>
             <span>Total: 125$</span>
            </div>
        )

    }
}

export default CartList;