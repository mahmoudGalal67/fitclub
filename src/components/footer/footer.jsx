import React from 'react'
import "./footer.css"
import insta from "../../assets/instagram.png"
import github from "../../assets/github.png"
import linkid from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"

function footer() {
  return (
    <div className="footer">
      <hr className='b-line'/>
      <div className="footer-links">
        <div className="social-links">
          <img src={insta} alt="" />
          <img src={github} alt="" />
          <img src={linkid} alt="" />
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className='blur f-blur-1'></div>
        <div className='blur f-blur-2'></div>
      </div>
    </div>
  )
}

export default footer