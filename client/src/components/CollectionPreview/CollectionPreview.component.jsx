import React from 'react';
import { withRouter } from 'react-router-dom';

// Styles
import './CollectionPreview.styles.scss';

// Components
import ProductItem from '../ProductItem/ProductItem.component';

const CollectionPreview = ({ title, items, routeName, history, match }) => (
    <div className='collection-preview'>
        <h2 className='title'>{title}</h2>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 3)
                .map(item => (
                    <ProductItem key={item.id} item={item} />
                ))
            }
        </div>
        <div 
            className='button' 
            onClick={() => history.push(`${match.url}/${routeName}`)} 
        >
            Shop all {title}
        </div>
    </div>
)

export default withRouter(CollectionPreview);