import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import bars from "../../assets/bars.png"
import {Link} from "react-scroll"
import "./Header.css"


function Header() {
  // const [openMenu, setOpenMenu] = useState(false)
  // const mobile = window.innerWidth<=768 ? true :false
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      {/* {openMenu === false && mobile === true?(
      <div onClick={setOpenMenu(true)} style={{padding :"1rem" , borderRadius:"10px" , backgroundColor:"appColor"}}>
        <img src={bars} style={{width:"1.5rem" , height:"1.5rem"}} alt="" />
      </div> */}
      <ul>
        <li ><a href="#Home">Home</a></li>
        <li ><a href="#Programms">Programms</a></li>
        <li><a href="#Reasons">Why us</a></li>
        <li ><a href="#Plans">Plans</a></li>
        <li ><Link 
        to="Testimonials"
        spy={true}
        smooth={true}
      
        > testimonials</Link></li>
      </ul>

    </div>
  )
}

export default Header 