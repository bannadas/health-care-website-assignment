import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import './Register.css'

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const auth = getAuth();

    const handleEmailChange = e =>{
       setEmail(e.target.value);
    }
    const handlePassChange = e =>{
      setPassword(e.target.value);
    }

    const handleRegistration = e =>{
        e.preventDefault();
        console.log(email,password);
        if(password.length < 6){
            setError('password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
          }
          
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            setError(error.message)
        })
       
    }
    return (
        <div>
            <NavigationBar></NavigationBar>


        <div className="register-form">
           
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit={handleRegistration}>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePassChange} type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <div className="mb-3 text-danger">{error}</div>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                
            </div>
        </div>
    </div>
    );
};

export default Register;