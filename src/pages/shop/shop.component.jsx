import React from 'react';
import SHOP_DATA from './shop.data';

// Styles

// Components
import Header from '../../components/header/header.component';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';
import Footer from '../../components/Footer/Footer.component';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }
    
    render(){
        const {collections} = this.state;

        return (
            <div className='shop-page'>
                <Header />
                {
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
                <Footer />
            </div>
        )
    }
}

export default ShopPage;