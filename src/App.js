import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

// Pages
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CollectionPage from './pages/collectionpage/collectionpage.component';
import SignInSignUpPage from './pages/SignInSignUp/SignInSignUp.component';

// Firbase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// Components
import Navigation from './components/navigation/navigation.component';

// Redux
import { setCurrentUser } from './redux/user/user.actions';


class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        });
      }
      else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Navigation />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route path='/shop/:collectionId' component={CollectionPage} />
        <Route exact path='/signin' 
          render={ () => this.props.currentUser 
            ? (<Redirect to='/' />) 
            : (<SignInSignUpPage />) 
          } 
        />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
