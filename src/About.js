import React from 'react'
import Button from '@material-ui/core/Button';
//import grid
import {Grid} from '@material-ui/core'
//import pictures
import picOne from '../src/developerPic/alrick-gillard-0mN84vxigL0-unsplash.jpg';
import picTwo from '../src/developerPic/cibelly-roberta-SE4Xc1WvIkU-unsplash.jpg'
import picThree from '../src/developerPic/leilani-angel-K84vnnzxmTQ-unsplash.jpg'
import picFour from '../src/developerPic/leonel-hernandez-arteaga-jns8BPueAgU-unsplash.jpg'
import picFive from '../src/developerPic/matheus-ferrero-W7b3eDUb_2I-unsplash.jpg'
import picSix from '../src/developerPic/meritt-thomas-aoQ4DYZLE_E-unsplash.jpg'
//import pages
import InsersectionObserverAbout from './IntersectionObserver/InsersectionObserverAbout'
function About() {
    return (
        <div className="about-cover">
            <div className="about-header-txt">
            <h1>Our Company</h1>
            </div>
            <div className="about-what">
            <ul>
                <li className="what-content">
                    <h5>What we are</h5>
                    <h1>We are dynamic team of creative people</h1>
                    <p>We provide consulting services in the area of IFRS and management reporting, helping companies to reach their highest level. We optimize business processes, making them easier.</p>
                    <Button variant="contained" color="secondary">
  <span>GET STARTED</span>  <i class="arrow right"></i>
</Button>
                </li>
                <li className="what-about-img"></li>
            </ul>
            </div>
            <div className="about-grid-content">
            <div class="container">
  <div class="row">
    <div class="col-sm">
      <div className="grid-content">
          <h4>O1.<span>Our Mission</span></h4>
          <p>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
      </div>
    </div>
    <div class="col-sm">
    <div className="grid-content">
          <h4>O2.<span>Our Mission</span></h4>
          <p>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
      </div>
    </div>
    <div class="col-sm">
    <div className="grid-content">
          <h4>O3.<span>Our Mission</span></h4>
          <p>llum similique ducimus accusamus laudantium praesentium, impedit quaerat, itaque maxime sunt deleniti voluptas distinctio .</p>
      </div>
    </div>
  </div>
</div>
            </div>
            <InsersectionObserverAbout/>
            <div className="about-deveoper-img">
              <div className="about-dev-heading">
              <p>Our Team</p>
              <h1>Expert Team member to get<br></br> best service</h1>
              </div>
              <div className="dev-img-collection">
              <Grid lg={12} item container spacing={3}>
        <Grid item lg={4} xs={12} sm={6}><img src={picOne}/><h5>Justin Hammer</h5><p>Digital Marketer</p></Grid>
        <Grid item lg={4} xs={12} sm={6}><img src={picTwo}/><h5>Jason Roy</h5><p>UI/UX Designer</p></Grid>
        <Grid item lg={4} xs={12} sm={6}><img src={picThree}/><h5>Henry Oswald</h5><p>Developer</p></Grid>
        <Grid item lg={4} xs={12} sm={6}><img src={picFour}/><h5>David Williams</h5><p>Senior Marketer</p></Grid>
        <Grid item lg={4} xs={12} sm={6}><img src={picFive}/><h5>Peter Odin</h5><p>App Developer</p></Grid>
        <Grid item lg={4} xs={12} sm={6}><img src={picSix}/><h5>David Spensor</h5><p>Project Manager</p></Grid>
        </Grid>
        </div>
            </div>
        </div>
    )
}

export default About
