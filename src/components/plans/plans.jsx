import React from 'react'
import "./plans.css"
import {plansData} from "../../data/plansData"
import whitetik from "../../assets/whiteTick.png"

function plans() {
  return (
    <div className="plans" id='Plans'>
      <div className='blur plan-blur-1'></div>
      <div className='blur plan-blur-2'></div>
      <div className="plans-header">
        <span className='stroke-text'>ready to start </span>
        <span>your journy </span>
        <span className='stroke-text'>with us</span>
      </div>

      <div className="plans-cards">
        {plansData.map((plan)=>(
          <div className="plan">
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature)=>(
                <div className="feature">
                  <img src={whitetik} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <span>see more benefits -></span>
            <button className='btn btn-card'>join now</button>
          </div>
        ))}
        <div>
        </div>
      </div>
    </div>
  )
}

export default plans