import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Styles
import './navigation.styles.scss';

// Components
import CartDropdown from '../CartDropdown/CartDropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

// Assets
import Logo from '../../assets/bigiu_logo.png'
import IG from '../../assets/ig.svg'
import FB from '../../assets/fb.svg'
import CartIcon from '../CartIcon/CartIcon.component';

const Navigation = ({ currentUser, hidden, signOutStart }) => (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li>About</li>
            <li>Contact</li>
            {currentUser
                ? <li className='link' onClick={signOutStart}>Sign Out</li>
                : <li><Link to='/signin'>Sign In</Link></li>
            }
        </ul>
        <div className='logo'>
            <img src={Logo} alt='Bigiu' />
        </div>
        <div className='social-media'>
            <CartIcon />
            <div className='social-icon'>
                <img src={IG} alt='IG' />
            </div>
            <div className='social-icon'>
                <img src={FB} alt='FB' />
            </div>
        </div>
        {hidden 
            ? null
            : <CartDropdown />
        }
    </nav>
)

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);