import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Header from '../../components/header/header.component';
import CollectionsOverviewContainer from '../../components/collectionsOverview/collectionsOverview.container';
import Footer from '../../components/Footer/Footer.component';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
    
    componentDidMount(){
        const { fetchCollectionsStart } = this.props;
        fetchCollectionsStart();
    }

    render(){
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Header />
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
                <Footer />
            </div>
        )
    }
} 


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);