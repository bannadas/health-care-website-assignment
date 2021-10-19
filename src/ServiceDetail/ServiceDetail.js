import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import Service from '../pages/Service/Service';
import data from '../Data/Detail.json'

const ServiceDetail = () => {
    const {serviceId} = useParams();
    console.log(serviceId)
   
//    console.log(Service)
const [details,setDetails] = useState({});

useEffect(()=>{
    console.log(data.find(d=>d.id == 1));
    const serviceDetail = data.find(detail => detail.id == serviceId)
    setDetails(serviceDetail)
    console.log(details)
},[])


// useEffect(() => {
//     fetch('http://localhost:3000/data.json')
//     .then(res => res.json())
//     .then(data => {
//         setDetails(data)
//         console.log(details
//         )
//         const serviceDetail = details.find(detail => detail.id === serviceId)
//     setDetails(ServiceDetail)
//     })
    
// },[serviceId])
    return (
        <div>
            <h1>details</h1>
            
            <img src={details.image} alt="" />
            <h1>{details?.name}</h1>
            <p>{details.description}</p>
            <button>Book appointment</button>
            
        </div>
    );
};

export default ServiceDetail;