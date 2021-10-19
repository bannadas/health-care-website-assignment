import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Banner.css'
import bannerImage from '../../Images/header-image.png'

const Banner = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="banner  collapseOnSelect ">
            <div className="banner-text">
            <h1>We Care-Hospital And Clinic</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deleniti consequuntur reiciendis assumenda perspiciatis temporibus provident molestias ex! Quia rem aliquid voluptates consectetur veniam aspernatur cumque fugit quidem sed consequuntur.</p>
            <button className="get-appoinment-btn">Get Appoinment</button>
            </div>
             
                <img className="banner-image" src={bannerImage} alt="" />
            
            </div>
            
        </div>
    );
};

export default Banner;