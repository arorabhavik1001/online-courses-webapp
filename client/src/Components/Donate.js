import React from 'react'
import bhim from '../images/iconbox/bhim.png'
import gpay from '../images/iconbox/gpay.png'
import gpay1 from '../images/iconbox/gpay1.png'
import paytm from '../images/iconbox/paytm.png'


function Donate() {
    return (
        <div className="container">
            <h1 style={{"text-align": "center", "margin-bottom": "50px"}}className="heading">DONATE</h1>
            <h4 className='dd'>Direct Deposit</h4>
            <div className="card1 row"style={{'margin-bottom':'40px'}} >

            {/* <p className='details'>Bank - Punjab National Bank<br />Branch - Peetal factory, Shastri Nagar, Jaipur<br />Branch code- PUNB0355500<br />AC no. 3555000100125371</p> */}
            <div className="col-md-6">

            <p className='details'>Bank - Punjab National Bank<br />Branch - Peetal factory, Shastri Nagar, Jaipur</p>
            </div>
            <div className="col-md-6">

            <p className='details'>Branch code- PUNB0355500<br />AC no. 3555000100125371</p>
            </div>

            </div>
            <hr className="hr"/>
            <h4 className='dd'>UPI</h4>
            <div className="card1 row" style={{'margin-bottom':'40px'}} >
            
            <div className="icons">    
            <img src={paytm}  width="200px"/>
            <img src={bhim}  width="200px"/>
            <img src={gpay1}  width="180px"/>
            </div>

            <p className='details' style={{'text-align': 'center', 'font-weight': 'bold', 'font-size':'25px'}}>UPI no. 9929369844</p>
            
            </div>
        </div>
    )
}

export default Donate;