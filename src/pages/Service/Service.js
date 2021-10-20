import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    // const {service} = props;
    const {id, name,image, description } = service;
    return (
        <div className="service-card pb-3">
            <img src={image} alt="" />
            <h3 className="p-3">{name}</h3>
            
            <p className="px-3">{description}</p>
            
            
               <Link to={`/service/${id}`}> <button className="learn-more-button">Learn more about {name}</button></Link>
        
        </div>
    );
};


export default Service;