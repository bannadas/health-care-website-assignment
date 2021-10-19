import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import data from '../Data/Detail.json'
import NavigationBar from '../pages/NavigationBar/NavigationBar';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    console.log(serviceId)
   
//    console.log(Service)
const [details,setDetails] = useState({});

useEffect(() =>{
    fetch('http://localhost:3000/data.json')
    .then(res => res.json())
    .then(data => {
        const serviceDetail = data.find(detail => detail.id == serviceId)
        setDetails(serviceDetail)
    })
},[])









// useEffect(()=>{
//     console.log(data.find(d=>d.id == 1));
//     const serviceDetail = data.find(detail => detail.id == serviceId)
//     setDetails(serviceDetail)
//     console.log(details)
// },[])



    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1>details</h1>
            
            <img src={details.image} alt="" />
            <h1>{details?.name}</h1>
            <p>{details.description}</p>
            <button>Book appointment</button>
            
        </div>
    );
};

export default ServiceDetail;