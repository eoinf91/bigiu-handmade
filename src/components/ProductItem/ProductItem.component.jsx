import React from 'react'

// Styles
import './ProductItem.styles.scss'

const ProductItem = ({key, name, price, image}) => (
    <div className='product-item' key={key}>
        <div 
            className='image'
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
        <div className='copy'>
            {name
                ? <p>{name}</p>
                : <p>Product Name</p>
            }
            {price
                ? <p><strong>€{price}</strong></p>
                : <p><strong>€20.00</strong></p>
            }
        </div>
    </div>
)

export default ProductItem