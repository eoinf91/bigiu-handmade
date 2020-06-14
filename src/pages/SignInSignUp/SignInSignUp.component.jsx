import React from 'react'

// Styles
import './SignInSignUp.styles.scss'

// Components
import SignIn from '../../components/SignIn/SignIn.component';
import SignUp from '../../components/SignUp/SignUp.component';

const SignInSignUpPage = () => (
    <div className='sign-in-sign-up'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInSignUpPage;