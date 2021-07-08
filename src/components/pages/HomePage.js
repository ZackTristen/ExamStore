import React from 'react';
import GameListItem from '../game-list-item/game-list-item';
import CartListTable from '../cart-list/cart-list-table';
import './home-page.css'

const HomePage = () => {

        return (
                <div className='home-page'>
                        <GameListItem />
                        <CartListTable />
                </div>
        )
}

export default HomePage;