import React from 'react'

// Styles
import './SignIn.styles.scss'

// Components
import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <p>Sign in with your email and password</p>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='Email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='Password'
                        required 
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
                            {''}
                            Sign in with Google
                            {''}
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;