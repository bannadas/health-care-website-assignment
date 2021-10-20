import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import {FaUserAlt} from 'react-icons/fa';
import { getAuth, createUserWithEmailAndPassword,updateProfile} from "firebase/auth";


import './Register.css'

const Register = () => {
    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    

    const auth = getAuth();

    const handleNameChange = e => {
        setName(e.target.value);
      }
    const handleEmailChange = e =>{
       setEmail(e.target.value);
    }
    const handlePassChange = e =>{
      setPassword(e.target.value);
    }
    

    const handleRegistration = e =>{
        e.preventDefault();
        console.log(email,password,name);
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
            setName();
            setUserName();
            window.location.reload(true);
           
        })
        .catch(error => {
            setError(error.message)
        })

        const setUserName = () =>{
            updateProfile(auth.currentUser,{displayName:name})
            .then(res =>{} )
        }
       
        
    }
    return (
        <div>
            <NavigationBar></NavigationBar>


        <div className="register-form">
           
            <div>
            <div className="user-icon">
                <FaUserAlt/>
                </div>
                <h2 className="register-text">Register: Create Account</h2>
             <form onSubmit={handleRegistration}>
                <input onBlur={handleNameChange} type="text" name="" id="" placeholder="Your Name" className="name-field" />
                <br />
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Your Email" className="email-field my-1" />
                    <br />
                    <input onBlur={handlePassChange} type="password" name="" id="" placeholder="Your Password" className="pass-field"/>
                    <br />
                    <div className="mb-3 text-danger">{error}</div>
                    <br/>
                    <input className="submit-button" type="submit" value="Submit" />
                </form>
                <p className="my-2">Already have an account? <Link to="/login">Login</Link></p>
                
                
            </div>
        </div>
    </div>
    );
};

export default Register;