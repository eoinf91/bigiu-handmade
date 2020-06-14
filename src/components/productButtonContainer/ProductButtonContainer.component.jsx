import React from 'react';

// Styles
import './ProductButtonContainer.styles.scss';

// Components
import ProductButton from '../productButton/ProductButton.component';

class ProductButtonContainer extends React.Component {

    constructor(){
        super();

        this.state = {
            collections: [
                {
                    title: 'Earrings',
                    id: 1,
                    linkUrl: 'earrings'
                },
                {
                    title: 'Necklace',
                    id: 2,
                    linkUrl: 'necklace'
                },
                {
                    title: 'Choker',
                    id: 3,
                    linkUrl: 'choker'
                }
            ]
        }
    }
    
    render(){
        return(
            <div className='product-button-container'>
                <h2>Our Products</h2>
                <div className='product-buttons'>
                    {this.state.collections.map(({id, ...otherCollectionProps }) => (
                        <ProductButton key={id} {...otherCollectionProps} />
                    ))}
                </div>
            </div>
        )
    }
}

export default ProductButtonContainer