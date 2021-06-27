import React from 'react';

const CartItem = () => {
    return (
        <React.Fragment>
            <li>
                Игра
                <button type='submit'>+</button>
                <button type='submit'>-</button>
                <button type='submit'>Удалить все</button>
            </li>
        </React.Fragment>
    )
}

export default CartItem;