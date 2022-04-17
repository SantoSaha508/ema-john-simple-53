import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import './SignUp.css';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate('/shop');
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Did not match');
            return;
        }
        if(password < 6) {
            setError('Password must be at least 6 character');
            return;
        }
        
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-conainer'>
            <div>
                <h3 className='form-title'>Sign Up</h3>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email </label>
                        <input onBlur={handleEmail} type="email" name="email" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor='password'>Password </label>
                        <input onBlur={handlePassword} type="password" name="password" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor='confirm-password'>Confirm Password </label>
                        <input onBlur={handleConfirmPassword} type="password" name="confirm-password"  required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account <Link className='form-link' to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;