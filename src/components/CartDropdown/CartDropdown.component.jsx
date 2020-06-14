import React from 'react';

// Components
import CustomButton from '../CustomButton/CustomButton.component';

// Styles
import './CartDropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

export default CartDropdown