import React from 'react';

// Styles
import './CollectionPreview.styles.scss';

// Components
import ProductItem from '../ProductItem/ProductItem.component';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h2 className='title'>{title}</h2>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 3)
                .map(item => (
                    <ProductItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))
            }
        </div>
        <div className='button'>Shop all {title}</div>
    </div>
)

export default CollectionPreview;