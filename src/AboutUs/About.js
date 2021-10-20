import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup, Form } from 'react-bootstrap';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import {AiFillPhone,AiTwotoneMail} from 'react-icons/ai';
import {HiLocationMarker} from 'react-icons/hi';
import './About.css'

const About = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>


            <div className="container mission-vision-core-values">
              <div className="our-mission">
                <h1 className="our-mission-title">Our Mission</h1>
                <p className="text-muted">Our mission is the foundation of all of our decisions. It guides what we do. It must be known, owned and energized by all.We will distinguish ourselves by our commitment to our values, promoting an environment where :
                <li>Patients are treated as family </li>
                <li>Members of the community have confidence they will find hope and healing</li>
                <li>Physicians experience an efficient and cooperative atmosphere focused on excellence in patient care</li>
                <li>Staff who share our values are attracted and retained.</li></p>
              </div>


              {/* our vision */}
              <div className="our-vision">
                <h1 className="our-vision-title">Our Vision</h1>
                <p className="text-muted">Vision Our vision to be the model for community hospitals is supported by four pillars of excellence:

                <li>Clinical Quality</li>
                <li>Service Excellence</li>
                <li>Facilities and Technology</li>
                <li>Financial Viability</li>
                </p>
              </div>

              {/* core values */}
              <div className="core-values">
                <h1 className="core-values-title">Core values, Respect & Quality</h1>
                <p className="text-muted">
                  <li>Core Values
                Our Core values guide how we act toward each other and how we care for our patients. They must be accepted and enthusiastically practiced every day</li>
                <li>Respect
                Treating patients we serve and those with whom we work with compassion, demonstrating a high regard for the dignity and worth of each person</li>
                <li>Quality
                Continuous improvement through innovation and a commitment to recognized standards of excellence. Integrity Honesty and straight forwardness in all relationships</li>
                </p>
              </div>
            </div>
            
            {/* some info about patient,consultant,experience */}

        <div className=" container numbers">
            <div className="number-div">
                <h1>10000000+</h1>
            <p>Patient Treated</p>
            </div>
            <div className="number-div">
                <h1>120++</h1>
            <p>Expert Consultants</p>
            </div>
            <div className="number-div">
                <h1>10</h1>
            <p>Years Experience</p>
            </div>
            <div className="number-div">
                <h1>1000+</h1>
            <p>Dedicated Emoloyee</p>
            </div>
        </div>

          {/* contact */}

        <div className="container contact">
            <div className="row">

                {/* address and number */}
                <div className="col-md-7">
            <h2 className="mb-3">Get In Touch</h2>
            <p><AiFillPhone/> 12485799228</p>
            <p><AiTwotoneMail/> wecare@gmail.
            com</p>
            <p><HiLocationMarker/> 194/A Kazla,Motihar,6204 <br/> Rajshahi,Bangladeshh
            </p>
                </div>

            {/* contact form */}
                <div className="col-md-5 contact-form">
                    <h2>Contact Us</h2>
                <Form >
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">  
    <Form.Control type="email" placeholder="name@gmail.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" placeholder="Type your text here" rows={3} />
  </Form.Group>
  <Button className="submit-button">Submit</Button>
</Form>
    </div>
            </div>
            </div>
        </div>
        
    );
};

export default About;