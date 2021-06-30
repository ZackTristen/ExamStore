import React from 'react';
import GameListItem from '../game-list-item/game-list-item';
import CartList from '../cart-list/cart-list';

const HomePage = () => {

    return(
        <div>
<GameListItem />
<CartList/>
        </div>
        )
}

export default HomePage;