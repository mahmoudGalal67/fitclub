import React, { useState } from 'react'
import Header from "../Header/Header"
import "./Hero.css"
import heart from "../../assets/heart.png"
import heroimage from "../../assets/hero_image.png"
import heroimageback from "../../assets/hero_image_back.png"
import calories from "../../assets/calories.png"
import NumberCounter from "number-counter"

import {motion} from "framer-motion"


function Hero() {
  const mobile = window.innerWidth<=768 ? true :false
  const [transition, settransition] = useState({type:"spring" , duration:3})

  return (
<div className="hero" id='Home'>
  <div className='blur h-blur'></div>
  <div className="h-left">
    <Header />
    <div className="thebestadd">
      <motion.div 
      initial={{left :mobile ?"130px" :"180px"}}
      whileInView={{left:"6px"}}
      transition={{ damping:60,stiffness:80, type:"spring"}}
      >
      </motion.div>
      <span>the best fitness gym ever</span>
    </div>
    <div className="hero-text">
      <div>
        <span className="stroke-text">shape </span>
        <span>your</span>
      </div>
      <div>
        <span>ideal body</span>
      </div>
      <div>
        <p>in here we will help you to shape and build your ideal body and live your body to fullest</p>
      </div>
    </div>
  <div className="refers">
    <div>
      <span><NumberCounter end={140} start={100}  delay='4' preFix="+" /></span>
      <span>expert coachs</span>
    </div>
    <div>
      <span><NumberCounter end={215} start={100}  delay='4' preFix="+" /></span>
      <span>joined members</span>
    </div>
    <div>
      <span><NumberCounter end={65} start={0}  delay='4' preFix="+" /></span>
      <span>fitness programms</span>
    </div>
  </div>
  <div className="hero-buttons">
    <button className="btn">get started</button>
    <button className="btn">learn more</button>
  </div>
  </div>
  <div className="h-right">
  <button className="btn">join now</button>

  <img className="hero-image" src={heroimage} alt="" />

  <motion.div className="heart-rate"


  transition={transition}
  initial={{right:"-1rem"}}
  whileInView={{right:"3rem"}}
  >
    <img src={heart} alt="" />
    <span>heart rate</span>
    <span>116 bpm</span>
  </motion.div>
  <motion.img className="hero-image-back" src={heroimageback} alt=""
  transition={transition}
  initial={{right:"11rem"}}
  whileInView={{right:"20rem"}}
  />
  
  <motion.div 
  transition={transition}
  initial={{right:"37rem"}}
  whileInView={{right:"28rem"}}
  className="calories">
    <img src={calories} alt="" />
    <div className="caloreies-burned">
      <span>calories burned</span>
      <span>150 Kcal</span>
    </div>
  </motion.div>
  </div>
</div>
)
}

export default Hero