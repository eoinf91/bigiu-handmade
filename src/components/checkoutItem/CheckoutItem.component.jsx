import React from 'react'

// Styles
import './CheckoutItem.styles.scss';

const CheckoutItem = ({ cartItem: { name, image, price, quantity } }) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={image} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
)

export default CheckoutItem;