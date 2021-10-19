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
            <h1 className="text-center">All Our Specialist Doctors</h1>
            <div className="container cards">
                {details.map(detail =>
                     <div >
                       <h2> {detail.name}</h2>
                       
                     </div>
                     )}
            </div>
        </div>
    );
};

export default DoctorDetails;