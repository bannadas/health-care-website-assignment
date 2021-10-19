import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

import NavigationBar from '../pages/NavigationBar/NavigationBar';

const ServiceDetail = () => {
    
    // const {services} = useAuth();
    // console.log(services);
    // const exactMaching = service.find(sv => sv.id === Number(serviceId));
    // const {image,name,id}=exactMaching;
   
    return (
        <div>
            <NavigationBar></NavigationBar>
           
            <h1> Detail</h1>
            
            
        </div>
    );
};

export default ServiceDetail;