import React from 'react'
import Button from '@material-ui/core/Button';
import Footer from './GridCollection/Footer'
import TextField from '@material-ui/core/TextField'
import {FaLocationArrow,FaFacebookF,FaTwitter,FaLinkedin } from 'react-icons/fa';
import {AiFillMessage } from 'react-icons/ai';
import {BsPhone } from 'react-icons/bs';
function Contact() {
    return (
        <div className="contact-cover">
        <div className="contact-hero-cover">
            <h1>Get In Touch</h1>
        </div>
        <div className="form-part">
        <div class="container">
  <div class="row">
    <div class="col-lg">
    <div className="form-input">
    <h1>Contact Form</h1>
    <TextField
        label="Your Name"
        variant="outlined"
        color="secondary"
        fullWidth
        required
    />
     &nbsp;
       <TextField
        label="Email Address"
        variant="outlined"
        color="secondary"
        fullWidth
        required
    />
&nbsp;
   <TextField
    label="Your Message"
    variant="outlined"
    color="secondary"
    fullWidth
    required
    multiline
    rows={5}
/>
<Button variant="contained" color="secondary">
  SEND MESSAGE
</Button>
    </div>
    </div>
    <div class="col-lg">
    <div className="form-txt">
      <p>We are Professionals</p>
      <h2>Don’t Hesitate to contact with us for any kind of information</h2>
      <p><span><FaLocationArrow/></span>&nbsp;&nbsp;North Main Street,Brooklyn Australia</p>
      <p><span><AiFillMessage/></span>&nbsp;&nbsp;Email: contact@mail.com</p>
      <p><span><BsPhone/></span>&nbsp;&nbsp;Phone:+88 01672 506 744</p>
      <div className="form-social-links">
          <ul>
              <li><FaFacebookF size="25"/></li>
              <li><FaTwitter  size="25"/></li>
              <li><FaLinkedin  size="25"/></li>
          </ul>
      </div>
      </div>
    </div>
  </div>
</div>
        </div>

   
        <div className="container-fluid">
        <div className="map-responsive">
          <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
        </div>
      </div>



        <Footer/>
</div>
    )
}

export default Contact
