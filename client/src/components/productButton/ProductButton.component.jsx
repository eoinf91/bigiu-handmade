import React from 'react'
import { withRouter } from 'react-router-dom';

// Styles
import './ProductButton.styles.scss';

const ProductButton = ({title, linkUrl, history, match, image}) => (
    <div 
        className='product-button' 
        onClick={() => history.push(`${match.url}${linkUrl}`)} 
        style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
    >
        <div className='button'>Shop {title}</div>
    </div>
)

export default withRouter(ProductButton);