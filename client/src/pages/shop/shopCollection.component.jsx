import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions'

// Components
import CollectionPageContainer from '../collection/collection.container';
import ItemPage from '../item/item.component';


const ShopCollection = ({ match }) => {
    
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionPageContainer} />
            <Route path={`${match.path}/:collectionId`} component={ItemPage} />
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(ShopCollection);