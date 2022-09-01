import React from 'react'
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import tik from "../../assets/tick.png"
import nb from "../../assets/nb.png"
import nike from "../../assets/nike.png"
import adidas from "../../assets/adidas.png"

function Reasons() {
  return (
  <div className="reasons" id='Reasons'>
    <div className="r-left">
    <img src={image1} alt="" />
    <img src={image2} alt="" />
    <img src={image3} alt="" />
    <img src={image4} alt="" />
    </div>
    <div className="r-right">
      <span>some reasons</span>
      <div className='why '><span className='stroke-text'>why </span><span className='choose'>choose us</span></div>
      <div className="r-details">
        <div className='details'>
          <img src={tik} alt="" />
          <span>over +150 wxper coachs</span>
        </div>
        <div className='details'>
          <img src={tik} alt="" />
          <span>over +140 wxper coachs</span>
        </div>
        <div className='details'>
          <img src={tik} alt="" />
          <span>over +130 wxper coachs</span>
        </div>
        <div className='details'>
          <img src={tik} alt="" />
          <span>over +120 wxper coachs</span>
        </div>
      </div>
      <span style={{color :"gray" , fontWeight:"bold"}}>our partners</span>
      <div className="p-images">
        <img src={nb} alt="" />
        <img src={nike} alt="" />
        <img src={adidas} alt="" />
      </div>
    </div>
  </div>
)
}

export default Reasons
