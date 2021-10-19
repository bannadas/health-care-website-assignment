import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import './About.css'

const About = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            
            <CardGroup className="container my-4">
  <Card>
    
    <Card.Body>
      <Card.Title>Our Mission</Card.Title>
      <Card.Text className="text-muted">
      
Our mission is the foundation of all of our decisions. It guides what we do. It must be known, owned and energized by all.We will distinguish ourselves by our commitment to our values, promoting an environment where :
<li>Patients are treated as family </li>
<li>Members of the community have confidence they will find hope and healing</li>
<li>Physicians experience an efficient and cooperative atmosphere focused on excellence in patient care</li>
<li>Staff who share our values are attracted and retained.</li>
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Our Vision</Card.Title>
      <Card.Text className="text-muted">
      Vision Our vision to be the model for community hospitals is supported by four pillars of excellence:

<li>Clinical Quality</li>
<li>Service Excellence</li>
<li>Facilities and Technology</li>
<li>Financial Viability</li>
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
   
    <Card.Body>
      <Card.Title>Core values, Respect & Quality</Card.Title>
      <Card.Text className="text-muted">
      <li>Core Values
Our Core values guide how we act toward each other and how we care for our patients. They must be accepted and enthusiastically practiced every day</li>
<li>Respect
Treating patients we serve and those with whom we work with compassion, demonstrating a high regard for the dignity and worth of each person</li>
<li>Quality
Continuous improvement through innovation and a commitment to recognized standards of excellence. Integrity Honesty and straight forwardness in all relationships</li>
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardGroup>


        <div className=" container numbers">
            <div className="">
                <h1>10000000+</h1>
            <small>Patient Treated</small>
            </div>
            <div style={{backgroundColor:'gray',borderRadius:'10px'}}>
                <h1>120++</h1>
            <small>Expert Consultants</small>
            </div>
            <div>
                <h1>10</h1>
            <small>Years Experience</small>
            </div>
            <div>
                <h1>1000+</h1>
            <small>Dedicated Emoloyee</small>
            </div>
        </div>

        </div>
    );
};

export default About;