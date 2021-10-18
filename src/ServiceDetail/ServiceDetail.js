import React from 'react';
import { useParams } from 'react-router';
import NavigationBar from '../pages/NavigationBar/NavigationBar';

const ServiceDetail = () => {
    const {friendId} = useParams();
   
    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1> Detail</h1>
        </div>
    );
};

export default ServiceDetail;