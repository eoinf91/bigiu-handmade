import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Header from '../../components/header/header.component';
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview.component';
import Footer from '../../components/Footer/Footer.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div className='shop-page'>
        <Header />
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        <Footer />
    </div>
)

export default ShopPage;