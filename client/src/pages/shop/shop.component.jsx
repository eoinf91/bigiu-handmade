import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Header from '../../components/header/header.component';
import CollectionsOverviewContainer from '../../components/collectionsOverview/collectionsOverview.container';
import Footer from '../../components/Footer/Footer.component';
import ShopCollection from './shopCollection.component';

import CollectionPageContainer from '../collection/collection.container';
import ItemPage from '../item/item.component';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);
    
    return (
        <div className='shop-page'>
            <Header />
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            <Route path={`${match.path}/:collectionId/:linkUrl`} component={ItemPage} />
            <Footer />
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);