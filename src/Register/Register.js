import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import './Register.css'

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // const [error,setError] = useState('');

    const auth = getAuth();

    const handleEmailChange = e =>{
       setEmail(e.target.value);
    }
    const handlePassChange = e =>{
      setPassword(e.target.value);
    }

    const handleRegistration = e =>{
        console.log(email,password);
        
        createUserWithEmailAndPassword(auth,email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        e.preventDefault();
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
                    {/* <div className="mb-3 text-danger">{error}</div> */}
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>----------or-------------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    </div>
    );
};

export default Register;