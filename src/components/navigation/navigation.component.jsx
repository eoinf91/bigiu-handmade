import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

// Styles
import './navigation.styles.scss';

// Assets
import Logo from '../../assets/bigiu_logo.png'
import IG from '../../assets/ig.svg'
import FB from '../../assets/fb.svg'

const Navigation = ({ currentUser }) => (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li>About</li>
            <li>Contact</li>
            {currentUser
                ? <li className='link' onClick={() => auth.signOut()}>Sign Out</li>
                : <li><Link to='/signin'>Sign In</Link></li>
            }
        </ul>
        <div className='logo'>
            <img src={Logo} alt='Bigiu' />
        </div>
        <div className='social-media'>
            <div className='social-icon'>
                <img src={IG} alt='IG' />
            </div>
            <div className='social-icon'>
                <img src={FB} alt='FB' />
            </div>
        </div>
    </nav>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Navigation);