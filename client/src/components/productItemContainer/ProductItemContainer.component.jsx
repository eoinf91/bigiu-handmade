import React from 'react'

// Styles
import './ProductItemContainer.styles.scss'
import ProductItem from '../ProductItem/ProductItem.component'

const ProductItemContainer = () => (
    <div className='product-item-container'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
    </div>
)

export default ProductItemContainer