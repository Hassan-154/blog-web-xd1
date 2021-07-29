
import React from 'react'
import './service.css'
import Footer from './GridCollection/Footer'
import Grid from '@material-ui/core/Grid';
import {MdContentCopy,MdBusiness,MdBrandingWatermark} from "react-icons/md";
//import icon for service items
import {FaLaptopCode} from "react-icons/fa";
import {AiFillAndroid} from "react-icons/ai";
import {RiFileCopy2Line} from "react-icons/ri";

function Blog() {
   
    return (
        <div className="service-cover">
        <div className="service-heading-section">
        <h1>What We Do</h1>
        </div>



        <div className="home-service">
              <div className="home-service-heading">
              <p>Our Services</p>
              <h1>We provide a wide range of<br></br> creative services</h1>
              </div>
              <div className="home-service-items">
              <Grid lg={12} item container spacing={3}>
        <Grid item lg={4} xs={12} sm={6}>
          <ul>
            <li><FaLaptopCode size="60" className="home-service-item-icon"/></li>
            <li>
              <h4>Web development.</h4>
              <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
            </li>
          </ul>
        </Grid>
        <Grid item lg={4} xs={12} sm={6}>
          <ul>
            <li><MdContentCopy size="60" className="home-service-item-icon"/></li>
            <li>
              <h4>Interface Design.</h4>
              <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
            </li>
          </ul>
        </Grid>
        <Grid item lg={4} xs={12} sm={6}>
          <ul>
            <li><MdBusiness size="60" className="home-service-item-icon"/></li>
            <li>
              <h4>Business Consulting.</h4>
              <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
            </li>
          </ul>
        </Grid>
        <Grid item lg={4} xs={12} sm={6}>
          <ul>
            <li><MdBrandingWatermark size="60" className="home-service-item-icon"/></li>
            <li>
              <h4>Branding.</h4>
              <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
            </li>
          </ul>
        </Grid>
        <Grid item lg={4} xs={12} sm={6}>
          <ul>
            <li><AiFillAndroid size="60" className="home-service-item-icon"/></li>
            <li>
              <h4>App development.</h4>
              <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
            </li>
          </ul>
        </Grid>
        <Grid item lg={4} xs={12} sm={6}>
          <ul>
            <li><RiFileCopy2Line size="60" className="home-service-item-icon"/></li>
            <li>
              <h4>Content creation.</h4>
              <p>A digital agency isn't here to replace your internal team, we're here to partner</p>
            </li>
          </ul>
        </Grid>
        </Grid>
              </div>
            </div>

            <Footer/>






        </div>
    )
}

export default Blog
