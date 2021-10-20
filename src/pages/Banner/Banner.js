import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Banner.css'
import bannerImage from '../../Images/header-image.png'

const Banner = () => {
    return (
        <div>
            
            <div className="header">
            <NavigationBar></NavigationBar>
            <div className="banner  collapseOnSelect ">
            <div className="banner-text">
            <h1><span>We Care</span> <br/> Hospital And Clinic</h1>
            <p>Our mission is the foundation of all of our decisions. It guides what we do. It must be known, owned and energized by all.We will distinguish ourselves by our commitment to our values, promoting an environment.</p>
            <button className="get-appoinment-btn">Get Appoinment</button>
            </div>
             
                <img className="banner-image" src='http://html.ary-themes.com/meditab/images/main-slider/image-1.png' alt="" />
            
            </div>
            </div>
            
        </div>
    );
};

export default Banner;