import React, { useEffect, useState } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import './DoctorDetails.css'

const DoctorDetails = () => {
    const [details, setDetials] = useState([]);
    useEffect(() => {
        fetch('/Doctordetail.json')
            .then(res => res.json())
            .then(data => setDetials(data));
    }, [])
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div>
            <h1 className="text-center my-3 heading-text">All Our Specialist Doctors</h1>
            </div>
            <div className="container cards">
                {details.map(detail =>
                
                     <div className="doctor-card">
                         <img className="doctor-image" src={detail.image} alt="" />
                       <h2> {detail.name}</h2>
                       <p className="text-muted">{detail.qualification}</p>
                       <p>{detail.phone}</p>
                       <p>{detail.speciality}</p>
                       <button className="get-appointment-btn">Get appointment</button>
                     </div>
                     )}
            </div>
        </div>
    );
};

export default DoctorDetails;