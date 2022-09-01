import React from 'react'
import "./programms.css"
import {programsData} from "../../data/programsData"
import rightarrow from "../../assets/rightArrow.png"


function programms() {
  return (
    <div className="programms" id='Programms'>
      <div className="programms-header">
        <span className="stroke-text">explore our </span><span>programms</span><span className="stroke-text">to shape you</span>
      </div>
    
    <programm className="categories">
      {programsData.map((programm)=>(
        <div className="categorie">
          {programm.image}
          <span>{programm.heading}</span>
          <span>{programm.details}</span>
          <div className="join-now"><span>join now</span> <img src={rightarrow} alt="" /></div>
        </div>
      ))}
    </programm>
    </div>
  )
}

export default programms