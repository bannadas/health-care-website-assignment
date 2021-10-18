import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import NavigationBar from '../pages/NavigationBar/NavigationBar';

const ServiceDetail = () => {
    const {serviceId} = useParams();
 useEffect(()=> {
     const url = `https://raw.githubusercontent.com/Programming-Hero-Web-Course3/healthcare-related-website-bannadas/main/public/servicedetail.json?token=AUVDZ7SOLAY4BLJ5KC34BO3BNUQBS`
 },[])
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1>{serviceId}</h1>
            <h1> Detail</h1>
        </div>
    );
};

export default ServiceDetail;