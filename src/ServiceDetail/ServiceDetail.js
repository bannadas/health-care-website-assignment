import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetail.css'

import data from '../Data/Detail.json'
import NavigationBar from '../pages/NavigationBar/NavigationBar';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    console.log(serviceId)
   
const [details,setDetails] = useState({});



useEffect(()=>{
    fetch('Doctordetail.json')
    .then(res => res.json())
     const serviceDetail = data.find(detail => detail.id == serviceId)
     setDetails(serviceDetail)
     console.log(details)
 },[])



    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="detail-card">
           
            
            <img src={details.image} alt="" />
            <h1>{details?.name}</h1>
            <p>{details.description}</p>
            <button className="book-appointment-btn">Book a doctor's appointment</button>
            
            </div>
        </div>
    );
};

export default ServiceDetail;