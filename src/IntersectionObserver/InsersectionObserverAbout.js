import React,{useState,useEffect} from 'react'
import {Grid} from '@material-ui/core'
import InView from 'react-intersection-observer'
import ScrollWrapper from 'react-intersection-observer'
import Wrapper from 'react-intersection-observer'
//import icon
import { MdDone,MdContentCopy } from 'react-icons/md';
import { BsFlag } from 'react-icons/bs';
import { CgAwards } from 'react-icons/cg';
function InsersectionObserver( ) {
    //for user observer
    const [inView, setInView] = useState(false)
    console.log(inView);
    //function to run number counter
    const [sec, setSec] = useState(0);
    const [two,setTwo] = useState(0);
    const [third, seThird] = useState(0);
    const [fourth, setFourth] = useState(0);
    const numCounter=(()=>{
        if(sec < 1730)
        {
            setSec(sec+1);
        }
        if(two < 650)
        {
            setTwo(two+1);
        }
        if(third < 68)
        {
            seThird(third+1)
        }
        if(fourth < 415)
        {
            setFourth(fourth+1)
        }
    })
    useEffect(()=>{
        if(inView)
        {
            numCounter();
            console.log("again true")
        }
    })
        return (
            <div className="interObserverAbout">
        <ScrollWrapper className="inter-about-content" inView={inView}>
        <InView onChange={setInView}>
            <Wrapper>
            <Grid lg={12} item container spacing={2}>
        <Grid item lg={3} xs={12} sm={6}><MdDone size="55" className="inter-about-icon"/> <h1>{sec}<span>+</span>{inView}</h1><p>Project Done</p></Grid>
        <Grid item lg={3} xs={12} sm={6}><BsFlag size="55" className="inter-about-icon"/> <h1>{two}<span>M</span>{inView}</h1><p>User Worldwide</p></Grid>
        <Grid item lg={3} xs={12} sm={6}><MdContentCopy size="55" className="inter-about-icon"/> <h1>{third}<span>+</span>{inView}</h1><p>Availble Country</p></Grid>
        <Grid item lg={3} xs={12} sm={6}><CgAwards size="55" className="inter-about-icon"/> <h1>{fourth}<span>+</span>{inView}</h1><p>Award Winner</p></Grid>
        </Grid>
            </Wrapper>
        </InView>
        </ScrollWrapper>
        </div>
    )
}

export default InsersectionObserver
