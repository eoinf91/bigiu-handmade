import React from 'react';

// Styles
import './homepage.styles.scss';

const HomePage = () => (
    <div className='home-page'>
        <header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='logo'>ADD LOGO</div>
                <div className='social-media'>
                    <div className='social-icon'>IG</div>
                    <div className='social-icon'>FB</div>
                </div>
            </nav>
            <h1>Benvenuti in Bigiu</h1>
        </header>
        <div className='products'>
            <h2>Our Products</h2>
            <div className='product-button'>
                <div className='button'>Shop Earrings</div>
            </div>
            <div className='product-button'>
                <div className='button'>Shop Necklaces</div>
            </div>
            <div className='product-button'>
                <div className='button'>Shop Chokers</div>
            </div>
        </div>
        <div className='page-breaker'>
            <h3>Handmade jewellery made from high quality materials</h3>
        </div>
        <div className='product-container'>
            <h2>New Products</h2>
            <div className='product-item-container'>
                <div className='product-item'>
                    <div className='image'>Add Image</div>
                    <div className='copy'>
                        <p>Product Name</p>
                        <p><strong>€20.00</strong></p>
                    </div>
                </div>
                <div className='product-item'>
                    <div className='image'>Add Image</div>
                    <div className='copy'>
                        <p>Product Name</p>
                        <p><strong>€20.00</strong></p>
                    </div>
                </div>
                <div className='product-item'>
                    <div className='image'>Add Image</div>
                    <div className='copy'>
                        <p>Product Name</p>
                        <p><strong>€20.00</strong></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='about-preview'>
            <h3>About BiGiu Handmade</h3>
            <div className='about-preview-container'>
                <div className='image'>Add Image</div>
                <div className='copy'>
                    <p>Mi sono spesso sottovalutata quando si trattava delle mie capacità, creavo sempre gioielli per me stessa e raramente mostravo ciò che riuscivo a realizzare.</p>
                    <p>La passione per il fai da te e per l’arte è sempre esistita, tanto da decidere di iscrivermi al Liceo Artistico.</p>
                    <a href='/' className='button'>Read More</a>
                </div>
            </div>
        </div>
        <div className='insta-feed'>
            ADD INSTA FEED
        </div>
        <footer>
            <div className='footer-row'>
                <div className='logo'>Add Logo</div>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className='social-media'>
                    <div className='social-icon'>IG</div>
                    <div className='social-icon'>FB</div>
                </div>
            </div>
            <div className='footer-row'>
                <p>&copy; 2020, Bigiu Handmade</p>
                <p>Privacy | Cookies</p>
            </div>
        </footer>
    </div>
)

export default HomePage;