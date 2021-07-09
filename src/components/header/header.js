import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>
            <div className='title-container'>
                <span className='title'>Store Exam</span>
                <span className='description'> Здесь вы можете выбрать игру на свой вкус </span>
            </div>
            <div className='cart-link'>
                <Link to='/cart'>
                    <img src='https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png' alt='cart' className='link' />
                    <span className='description-cart'> Корзина покупок</span>
                </Link>
                
            </div>
            <div className='back-shop-link'>
                <Link to='/'>
                    <img src='https://image.flaticon.com/icons/png/512/889/889590.png' alt='cart' className='link' />
                    <span className='description-back'> Обратно в магазин</span>
                </Link>
                </div>
        </div>
    )


}

export default Header;