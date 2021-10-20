import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import {FcGoogle} from 'react-icons/fc';
import {FaUserAlt} from 'react-icons/fa';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './Login.css'
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();  
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    const auth = getAuth();

    const handleEmailChange = e =>{
       setEmail(e.target.value);
    }
    const handlePassChange = e =>{
      setPassword(e.target.value);
    }

    const handleLogin = e =>{
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
          
        signInWithEmailAndPassword(auth,email,password)
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


        <div className="login-form">
           
            <div>
                <div className="user-icon">
                <FaUserAlt/>
                </div>
                <h2 className="login-text">Log In</h2>
                <form onSubmit={handleLogin}>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" className="email-field my-1" />
                    <br />
                    <input onBlur={handlePassChange} type="password" name="" id="" placeholder="Your Password" className="pass-field" />
                    <br />
                    <div className="mb-3 text-danger">{error}</div>
                    <br/>
                    <input className="submit-button" type="submit" value="Submit" />
                </form>
                <p className="my-2">New Here?<Link to="/register">  Create an account</Link></p>
                <div>----------or-------------</div>
                <button onClick={handleGoogleLogin} className="google-sign-in-btn">  <span className="google-icon"><FcGoogle/></span> Google Sign In</button>
            </div>
        </div>
    </div>
    );
};

export default Login;