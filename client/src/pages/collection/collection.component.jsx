import React from 'react';
import { connect } from 'react-redux';

import ProductItem from '../../components/ProductItem/ProductItem.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

// styles
import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    console.log(items[0].name + " HELLO")
    return(
    <div className='collection-page'>
        <h2 className='title'>{ title }</h2>
        <div className='items'>
            {items.map(item => (
                <ProductItem key={item.id} item={item} /> 
            ))}
        </div>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);