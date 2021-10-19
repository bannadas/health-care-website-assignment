import React, { useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import NavigationBar from '../pages/NavigationBar/NavigationBar';
import './Login.css'

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const auth = getAuth();

    const handleEmailChange = e =>{
        console.log(e.target.value);
     }
     const handlePassChange = e =>{
       setPassword(e.target.value);
     }

    const handleLogin = () =>{
        console.log('login');
    }

    return (
        <div>
            <NavigationBar></NavigationBar>

            
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePassChange} type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to this website? <Link to="/register">Create Account</Link></p>
                <div>-------or----------</div>
                <button onClick={signInUsingGoogle}
                    className="btn-regular"
                    
                >Google Sign In</button>
            </div>
        </div>
    </div>
    );
};

export default Login;