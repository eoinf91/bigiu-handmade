import React from 'react';
import { connect } from  'react-redux'

// Components
import CustomButton from '../CustomButton/CustomButton.component';
import CartItem from '../cartItem/cartItem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

// Styles
import './CartDropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
            }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)