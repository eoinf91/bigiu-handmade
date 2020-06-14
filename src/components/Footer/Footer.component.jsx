import React from 'react';

// Styles
import './Footer.styles.scss';

// Assets
import Logo from '../../assets/bigiu_logo.png'
import IG from '../../assets/ig.svg'
import FB from '../../assets/fb.svg'

const Footer = () => (
    <footer>
        <div className='footer-row'>
            <div className='logo'>
                <img src={Logo} alt='BiGiu' />
            </div>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='social-media'>
                <div className='social-icon'>
                    <img src={IG} alt='IG' />
                </div>
                <div className='social-icon'>
                    <img src={FB} alt='FB' />
                </div>
            </div>
        </div>
        <div className='footer-row'>
            <p>&copy; 2020, Bigiu Handmade</p>
            <p>Privacy | Cookies</p>
        </div>
    </footer>
)

export default Footer;