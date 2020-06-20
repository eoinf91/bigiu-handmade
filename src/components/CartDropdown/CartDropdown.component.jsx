import React from 'react';
import { connect } from  'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

// Components
import CustomButton from '../CustomButton/CustomButton.component';
import CartItem from '../cartItem/cartItem.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Styles
import './CartDropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length
                ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                : <p>Your cart is empty</p>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            Go to checkout
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))