import React from 'react'
import "../Pages/index.css"
import writing from "../images/writing.png"
import fire from "../images/fire.png"
const Divs = () => {
  return (
    <div>

<div className="container">
      <div className="row">
        <div className="col">
          <div className="circle" id="c1"> <img src={writing}/></div>
          <p className="color-changing-text">Careers</p>
        </div>
        <div className="col">
        <div className="circle" id="c2"><img src={fire}/></div>
        <p>Pay View Bill</p>
        </div>
        <div className="col">
        <div className="circle" id="c3"><img src={writing}/></div>
        <p className="color-changing-text">Register for E-Bill</p>
        </div>
        <div className="col">
        <div className="circle" id="c4"><img src={writing}/></div>
        <p className="color-changing-text">Gas Tarif/Rates</p>
        </div>
        <div className="col">
        <div className="circle" id="c5"><img src={writing}/></div>
        <p>Affected Employees Complaints</p>
        </div>
        <div className="col">
        <div className="circle" id="c6"><img src={writing}/></div>
        <p className="color-changing-text">Meter Manufacturing Plants</p>
        </div>
        <div className="col">
        <div className="circle" id="c7"><img src={writing}/></div>
        <p>Complaints/Feedbacks</p>     
        </div>
        <div className="col">
        <div className="circle" id="c8"><img src={writing}/></div>
        <p>Defaulters List</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Divs