import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyA-u0c5TIJ48jFlU4CkrDv0PLwujoyAO8k",
    authDomain: "bigiu-handmade.firebaseapp.com",
    databaseURL: "https://bigiu-handmade.firebaseio.com",
    projectId: "bigiu-handmade",
    storageBucket: "bigiu-handmade.appspot.com",
    messagingSenderId: "1018404925675",
    appId: "1:1018404925675:web:d6093e235aa6fb4ead0eae",
    measurementId: "G-316EX4TPWQ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;