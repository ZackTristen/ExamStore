import React from 'react';
import picture from '../../picture/Screenshot_3.jpg'
import './game-item.css'

const GameItem = (props) => {

    const { name, price, sinopsis, studio } = props.game;

    return (
        <div className="game-item">

            <h3>{name}</h3>
            <img src={picture} alt={name} />
            <span>{sinopsis}</span>
            <h3> Разработчик {studio}</h3>
            
                <h2>{price}</h2>
                <button>Добавить в корзину</button>


            </div>

            )
    }


            export default GameItem;