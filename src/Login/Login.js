import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
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
                <h2>LogIn</h2>
                <form onSubmit={handleLogin}>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={handlePassChange} type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <div className="mb-3 text-danger">{error}</div>
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
                <p>New Here?<Link to="/register">Create an account</Link></p>
                <div>----------or-------------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">Google Sign In</button>
            </div>
        </div>
    </div>
    );
};

export default Login;