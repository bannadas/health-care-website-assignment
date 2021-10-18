import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import NavigationBar from '../pages/NavigationBar/NavigationBar';

const ServiceDetail = () => {
   
    return (
        <div>
            <NavigationBar></NavigationBar>
           
            <h1> Detail</h1>
        </div>
    );
};

export default ServiceDetail;