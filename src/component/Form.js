import React from "react";
import './Form.css';

function Form(){

    return(
        <div className="main" id="fff" onSubmit={(e)=>{e.preventDefault()}}>
            <span className="sp" id="sdd">
                <h2>GET IN TOUCH</h2>
                <p>Please complete the form and we will get back to you.</p>
            </span>
            <span className="sp" id="spp">
                <form action="">
                <label htmlFor="">Name*  <br/>
                    <input type="text" placeholder="Enter Your Name" className="input" /><br/><br/>
                </label>
                <label htmlFor="">Email*<br/>
                    <input type="email" placeholder="Enter Your Email" className="input" /><br/><br/>
                </label>
                <label htmlFor="">Mobile Number*<br/>
                    <input type="number" placeholder="Enter Your Mobile Number" className="input"/><br/><br/>
                </label>
                <label htmlFor="">
                    <button type="submit" className="button">Register Now</button>
                </label>
                </form>
            </span>
        </div>
    )
}
export default Form;