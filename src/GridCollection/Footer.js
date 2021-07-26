import React from 'react'
import {Grid} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FaFacebookF,FaPinterest,FaTwitter } from 'react-icons/fa';
function Footer() {
    return (
        <div className="footer-container">
           <Grid lg={12} item container spacing={3}>
        <Grid item lg={3} xs={12} sm={6}>
        <h5>Company</h5>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Support</p>
        <p>FAQ</p>
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
            <h5>Quick Links</h5>
            <p>About</p>
            <p>Services</p>
            <p>Blogs</p>
            <p>Contact</p>
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
            <h5>Subscribe Us</h5>
            <div className="footer-second-last">
            <p>Subscribe to get latest news<br></br> article and resources</p>
            <br></br>
            <TextField id="outlined-basic" label="Subscribe Now.. ." variant="outlined" />
            <br></br>
            <Button variant="contained" color="secondary">
  <span>SUBSCRIBE</span>  
</Button>
</div>
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
            <div className="footer-end">
                <h4>Mega<span>Kit.</span></h4>
                <p>Support@megakit.com</p>
                <h3>+23-456-6588</h3>
            </div>
        </Grid>
        </Grid>
      <div className="footer-links">
      <hr></hr>
      </div>
        </div>
    )
}

export default Footer
