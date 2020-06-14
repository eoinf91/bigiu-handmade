import React from 'react'
import { withRouter } from 'react-router-dom';

// Styles
import './ProductButton.styles.scss';

const ProductButton = ({title, linkUrl, history, match}) => (
    <div className='product-button' onClick={() => history.push(`${match.url}shop/${linkUrl}`)} >
        <div className='button'>Shop {title}</div>
    </div>
)

export default withRouter(ProductButton);