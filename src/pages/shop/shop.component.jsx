import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Header from '../../components/header/header.component';
import CollectionsOverview from '../../components/collectionsOverview/collectionsOverview.component';
import Footer from '../../components/Footer/Footer.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/withSpinner/withSpinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    state = {
        loading: true
    };

    unsubscribeFromSnapShot = null;

    componentDidMount(){
        const { updateCollections } = this.props;
        const CollectionRef = firestore.collection('collections');

        CollectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false});
        })
    }

    render(){
        const { match } = this.props;
        const  { loading } = this.state;
        return (
            <div className='shop-page'>
                <Header />
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
                <Footer />
            </div>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);