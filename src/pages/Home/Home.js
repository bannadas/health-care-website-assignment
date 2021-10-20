import React from 'react';
import { Card, CardGroup, Carousel, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import './Home.css'



const Home = () => {
    return (
        <div id="home">
            
            <Banner></Banner>
            <Services></Services>
            
            <h1 className="chose-us">Chose Us</h1>
            <div className="container my-4  slider">
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-img"
      src="https://media.istockphoto.com/photos/offering-patientcentred-care-that-proves-effective-and-efficient-picture-id1301555107?b=1&k=20&m=1301555107&s=170667a&w=0&h=urags5L_xQX4tiAVkW8Hws70_Z2EwnFvDoT2gOqgfk8="
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="slider-caption">Ready to help at any time</h3>
      
      <button className="get-appointment-btn">Get Appointment</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-img"
      src="https://media.istockphoto.com/photos/pediatrician-talks-with-patients-mother-picture-id1293681788?b=1&k=20&m=1293681788&s=170667a&w=0&h=86FIfZB_E9W0-1olORv2I6P5Fvd6EUMZUVPyiMfVrAY="
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="slider-caption">Uncompromising excellence.Commitment to care </h3>
      
      <button className="get-appointment-btn">Get Appointment</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 slider-img"
      src="https://media.istockphoto.com/photos/doctors-appointment-picture-id1254899249?b=1&k=20&m=1254899249&s=170667a&w=0&h=c3A0Arr9vqnZ_RiUuQmpKivssqVZ5im84fl_EkrKMD8="
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className="slider-caption">World class care right where you need it.</h3>
      
      <button className="get-appointment-btn">Get Appointment</button>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
            </div>


            <div className="container my-5 ">
                <CardGroup>
  
  <Card>
    
    <Card.Body className="find-dept-card">
      <Card.Title className="find-dept-card-title ">Find Our Departments Here</Card.Title>
      <Card.Text className="departments">
      
      <Link to="/home"><li>Neurology Department</li></Link>
      <hr />
      <Link to="/home"><li>Dental Department</li></Link>
      <hr />
      <Link to="/home"><li>Cardiology Department</li></Link>
      <hr />
      <Link to="/home"><li>Urology Department</li></Link>
      <hr />
      <Link to="/home"><li>Eye Department</li></Link>
      <hr />
      <Link to="/home"><li>Surgery Department</li></Link>
       
    
      </Card.Text>
    </Card.Body>
   
   
  </Card>
  <Card>
    
    <Card.Body className="consult-doctor-card">
      <Card.Title className="consult-doctor-card-title">Consult With Specialists</Card.Title>
      <Card.Text className="consult-doctor">
     
      <Link to="/home"><li>Child Specialist</li></Link>
      <hr />
      <Link to="/home"><li>Heart Specialist</li></Link>
      <hr />
      <Link to="/home"><li>Dentist Specialist</li></Link>
      <hr />
      <Link to="/home"><li>Eye Specialist</li></Link>
      <hr />
      <Link to="/home"><li>Surgery Specialist</li></Link>
       
   
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;