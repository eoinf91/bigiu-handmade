import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoading } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/withSpinner/withSpinner.component';
import CollectionPage from './item.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoading(state)
});

const ItemPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default ItemPageContainer;