import React from 'react'
import { BsPhone } from 'react-icons/bs';
function ParallaxSection() {
    return (
        <div className="para-container">
                <div className="para-box-inner-txt">
                <div className="card" style={{width: '27rem'}}>
        <div className="card-body">
        <div className="para-text-container">
        <p>We create for you</p>
                <h2>Entrust Your Project <br></br> to Our Best Team of<br></br> Professionals</h2>
               <div className="par-gray-p-line">
               <p >Have any project on mind? For <br></br>immidiate support :</p>
               </div>
                    <h4><span><BsPhone size="26" className="para-phone-logo"/></span> &nbsp;+23 876 65 455</h4>
                </div>
        </div>
      </div>
                </div>
        </div>
    )
}

export default ParallaxSection
