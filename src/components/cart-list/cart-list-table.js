import React from 'react';
import './cart-list-table.css'
import { connect } from 'react-redux'
import { gameRemoveFromCart, allGamesRemoveFromCart, gameAddedToCart} from '../../actions/actions'

const CartListTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
   
    const renderRow = (item, idx) => {
        const { id, name, price, count } = item;
        return (
            <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{name}</td>
                <td>{price}$</td>
                <td>{count}</td>
                <td>
                    <button  className='add-button' onClick={() => onIncrease(id)}>+</button>
                    <button className='delete-button' onClick={() => onDecrease(id)}>-</button>
                    <button className='all-delete-button' onClick={() => onDelete(id)}>удалить все</button>
                    
                </td>
            </tr>
        )
    }

    return (
        <div className="shoping-cart">
            
            <table>
                <caption><h3 className ='title-cart'>Корзина покупок</h3></caption>
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
                    {
                        items.map(renderRow)
                    }
                </tbody>

            </table>
            <span className='total'>Total price: {total}$</span>
        </div>
    )

}


const mapStateToProps = ({ shopingCart : { cartItems, orderTotal }}) => {
    return {
        items: cartItems,
        total: orderTotal
    };

}
 
const mapDispatchToProps = {
    
        onIncrease: gameAddedToCart,
        onDecrease: gameRemoveFromCart,
        onDelete: allGamesRemoveFromCart,
        
    
}
export default connect(mapStateToProps, mapDispatchToProps)(CartListTable);