import React from 'react';
import picture from '../../picture/Screenshot_3.jpg'
import './game-item.css'

const GameItem = ({game, onAddedToCart}) => {

    const { id, name, price, sinopsis, studio } = game;

    return (
        <div className="game-item">

            <h3 className='game-title'>{name}</h3>
            <img className={`store-pic-${id} picture`} src={picture} alt={name} />
            <span className='sinopsis'>{sinopsis}</span>
            <span className='studio'> Разработчик {studio}</span>
            
                <span classNam='price'>Цена {price}$</span>
                <button className='add-to-cart' onClick={onAddedToCart}>Добавить в корзину</button>


            </div>

            )
    }


            export default GameItem;