import React, { useState } from 'react'
import "./testimonials.css"
import {testimonialsData} from "../../data/testimonialsData"
import r_arrow from "../../assets/rightArrow.png"
import l_arrow from "../../assets/leftArrow.png"
import {motion} from "framer-motion"


function Testimonials() {

  let t_length = testimonialsData.length
  const [selected, setselected] = useState(0)
  const [transition , setTransition] = useState({type :"spring" , duration :3})

  return (
    <div className="testimonials" id='Testimonials'>
      <div className="t-left">
        <span>testimonials</span>
        <span className='stroke-text'>what they</span>
        <span>say about us</span>
        <motion.p
        key={selected}
        initial={{x:100 , opacity:0}}
        whileInView={{x:0 , opacity:1}}
        transition={{...transition , duration:2}}
        exit={{opacity:0 , x:-100}}
        >{testimonialsData[selected].review}</motion.p>
        <div>
          <span>{testimonialsData[selected].name} -</span>
          <span> {testimonialsData[selected].status}</span>
        </div>
      </div>
      <div className="t-right">
        <motion.img
        key={selected}
        initial={{x:100 , opacity:0}}
        whileInView={{x:0 , opacity:1}}
        transition={{...transition , duration:2}}
        exit={{opacity:0 , x:-100}}
        src={testimonialsData[selected].image} alt="" />
        <motion.div
        initial={{x:-100 , opacity:0}}
        whileInView={{x:0 , opacity:1}}
        transition={{...transition , duration:2}}
        ></motion.div>
        <motion.div
        initial={{x:100 , opacity:0}}
        whileInView={{x:0 , opacity:1}}
        transition={{...transition , duration:3}}></motion.div>
        <div className="arrows">
          <img onClick={()=>setselected(selected === 0 ? t_length-1 : selected-1)} src={l_arrow} alt="" />
          <img onClick={()=>setselected(selected === t_length-1 ? 0 : selected+1)} src={r_arrow} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials