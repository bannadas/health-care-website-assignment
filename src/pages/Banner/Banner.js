import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Banner.css'
import bannerImage from '../../Images/header-image.png'

const Banner = () => {
    return (
        <div>
            
            <div className="header ">
            <NavigationBar></NavigationBar>
            <div className="banner  collapseOnSelect ">
            <div className="banner-text">
            <h1><span>We Care </span> <br/> Hospital And Clinic</h1>
            <p>Our mission is the foundation of all of our decisions.<br/> It guides what we do. It must be known, owned and energized by all.We will distinguish ourselves by our commitment to our values, <br/>promoting an environment.</p>
            <button className="get-appoinment-btn">Get Appoinment</button>
            </div>
             
                <img className="banner-image" src={bannerImage} alt="" />
            
            </div>
            </div>
            
        </div>
    );
};

export default Banner;