import React, { useEffect, useState } from 'react';
import Service from '../pages/Service/Service'
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services">
            <h2 className="services-title">Our services</h2>
            <div className=" container service-container">
              
               {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
              

                
            </div>
        </div>
    );
};
export default Services;