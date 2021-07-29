import React from "react";
import Button from '@material-ui/core/Button';
import Footer from './GridCollection/Footer'
import TextField from '@material-ui/core/TextField'
import './sign.css'
const SignUp = () => {
  return (
      <div>
      <div className="Sign__up">
      <div className="form-input">
    <TextField
        label="First Name"
        variant="outlined"
        color="secondary"
        fullWidth
        required
    />
    &nbsp;
       <TextField
        label="Last Name"
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
        label="Password"
        variant="outlined"
        color="secondary"
        fullWidth
        required
    />
<Button variant="contained" color="secondary">
  SIGN UP
</Button>
    </div>
      </div>
      </div>
      
  );
};

export default SignUp;