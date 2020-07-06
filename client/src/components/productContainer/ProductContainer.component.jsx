import React from 'react'

// Styles
import './ProductContainer.styles.scss'
import ProductItemContainer from '../productItemContainer/ProductItemContainer.component'

const ProductContainer = () => (
    <div className='product-container'>
        <h2>New Products</h2>
        <ProductItemContainer />
    </div>
)

export default ProductContainer