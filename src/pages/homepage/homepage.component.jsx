import React from 'react';

// Styles
import './homepage.styles.scss';

// Components
import Header from '../../components/header/header.component';
import ProductButtonContainer from '../../components/productButtonContainer/ProductButtonContainer.component';
import PageBreaker from '../../components/pageBreaker/PageBreaker.component';
import ProductContainer from '../../components/productContainer/ProductContainer.component';
import AboutPreview from '../../components/AboutPreview/AboutPreview.component';
import Footer from '../../components/Footer/Footer.component';

const HomePage = () => (
    <div className='home-page'>
        <Header />  
        <ProductButtonContainer />
        <PageBreaker />
        <ProductContainer />
        <AboutPreview />
        {/* <div className='insta-feed'>
            ADD INSTA FEED
        </div> */}
        <Footer />
    </div>
)

export default HomePage;