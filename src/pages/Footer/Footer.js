import React from 'react';
import './Footer.css'
import {AiOutlineFacebook,AiOutlineInstagram,AiOutlineYoutube } from 'react-icons/ai';
import {AiFillPhone,AiTwotoneMail} from 'react-icons/ai';
import {HiLocationMarker} from 'react-icons/hi';

const Footer = () =>{
    return (
        <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>We Care <br/> Hospital and Clinic</h1>
                <p className="mt-3 ">
                  <p><AiFillPhone/> 12485799228</p>
            <p><AiTwotoneMail/> wecare@gmail.
            com</p>
            <p><HiLocationMarker/> 194/A Kazla,Motihar,6204 <br/> Rajshahi,Bangladeshh
            </p>
                </p>

                
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">About Us</li>
                  
                  <li className="footer-menu">Doctor Details</li>
                  <li className="footer-menu"> Log in</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <h4>Opening hour</h4>
              <p>Saturday-Thursday</p>
              <p>09.00 AM - 11.00 PM</p>
            </div>
          </div>
          <div className="social-icons"><AiOutlineFacebook/> <AiOutlineInstagram/> <AiOutlineYoutube/></div>
        </div>
      </div>
    </div>
    );
};

export default Footer;