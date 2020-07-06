import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectoryCollections } from '../../redux/directory/directory.selectors';

// Styles
import './ProductButtonContainer.styles.scss';

// Components
import ProductButton from '../productButton/ProductButton.component';

const ProductButtonContainer = ({ collections }) => (
    <div className='product-button-container'>
        <h2>Our Products</h2>
        <div className='product-buttons'>
            {collections.map(({id, ...otherCollectionProps }) => (
                <ProductButton key={id} {...otherCollectionProps} />
            ))}
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectDirectoryCollections
})

export default connect(mapStateToProps)(ProductButtonContainer)