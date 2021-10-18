import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router';
import NavigationBar from '../pages/NavigationBar/NavigationBar';

const ServiceDetail = () => {
    const {serviceId} = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  useEffect(() => {
      fetch('/servicedetail.json')
      .then(res => res.json())
      .then(data => setServiceDetails(data.service))
  },[])

useEffect(()=> {
   const findService =  serviceDetails.find(service => service.login.id === serviceId)
    console.log(findService);
},[serviceDetails])
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1>{serviceId}</h1>
            <h1> Detail</h1>
        </div>
    );
};

export default ServiceDetail;