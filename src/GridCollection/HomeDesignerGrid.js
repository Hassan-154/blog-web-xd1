import React from 'react'
import {Grid} from '@material-ui/core'
//import icon
import {FaUserAlt} from "react-icons/fa";
//developer picture grid
import OnePic from '../developerPic/firmbee-com-gcsNOsPEXfs-unsplash.jpg'
function HomeDesignerGrid() {
    return (
        <Grid lg={12} item container spacing={3}>
        <Grid item lg={4} xs={12} sm={6}></Grid>
        
        </Grid>
    )
}

export default HomeDesignerGrid
