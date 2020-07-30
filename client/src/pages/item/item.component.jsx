import React from 'react';
import { connect } from 'react-redux';

import ProductItem from '../../components/ProductItem/ProductItem.component';

import { selectItems } from '../../redux/shop/shop.selectors';

// styles
import './item.styles.scss';

const ItemPage = (items) => {
    console.log(items.name + " HELLO")
    // const { title, items } = collection;
    return(
    <div className='collection-page'>
        {/* <h2 className='title'>{ title }</h2>
        <div className='items'>
            {items.map(item => (
                <ProductItem key={item.id} item={item} /> 
            ))}
        </div> */}
        <h1>hello</h1>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    items: selectItems(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(ItemPage);