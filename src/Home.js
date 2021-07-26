import React from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { TiDeviceLaptop } from "react-icons/ti";
import { FaAward } from "react-icons/fa";
import {MdContentCopy,MdBusiness,MdBrandingWatermark} from "react-icons/md";
import {FaCoffee} from "react-icons/fa";
import IntersectionObserver from './IntersectionObserver/InsersectionObserver'
//import icon for service items
import {FaLaptopCode} from "react-icons/fa";
import {AiFillAndroid} from "react-icons/ai";
import {RiFileCopy2Line} from "react-icons/ri";
import ParallaxSection from './parallaxSection/ParallaxSection';
function Home() {
    return (
        <div className="home-cover">
          <div className="header-cover">
                <div className="header-txt-cover">
                  <p>Prepare For New Future</p>
                  <h1>Our work is<br></br>
presentation of our<br></br>
capabilities.</h1>
<Button variant="contained" color="secondary">
  <span>GET STARTED</span>  <i class="arrow right"></i>
</Button>
                </div>
            </div>
            <div className="creative-lines">
            <p>We are creative & expert people</p>
            <h1>We work with business & provide
             solution to client with their business problem</h1>
            </div>
            <div className="home-grid">
            <div class="container">
  <div class="row">
    <div class="col-sm col-home">
      <FaAward size="80" className="home-icon-grid"/>
      <h3>Modern & Responsive design</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
    </div>
    <div class="col-sm col-home">
    <TiDeviceLaptop size="80" className="home-icon-grid"/>
    <h3>Awarded licensed company</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
    </div>
    <div class="col-sm col-home">
     <MdContentCopy size="80" className="home-icon-grid"/>
     <h3>Build your website Professionally</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus.</p>
    </div>
  </div>
</div>
            </div>
            <div className="what-we-are">
            <div class="container">
  <div class="row">
    <div class="col-sm what-img">
      
    </div>
    <div class="col-sm">
     <div className="what-home">
       <div className="uper-home">
       <p>What we are</p>
       <h1>We are dynamic team of creative people</h1>
       </div>
       <div className="down-home">
       <ul>
         <li className="coffe-logo"><FaCoffee size="45"/></li>
         <li>
           <h4>We are Perfect Solution</h4>
           <p>We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>
           <Button variant="contained" color="secondary">
  <span>GET STARTED</span>  <i class="arrow right"></i>
</Button>
         </li>
       </ul>
       </div>
     </div>
    </div>
  </div>
</div>
            </div>
            <IntersectionObserver/>
            <div className="hr-line">
            <hr/>
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
              <ParallaxSection/>
              
            </div>
    )
}

export default Home
