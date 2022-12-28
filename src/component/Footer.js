import React from "react";
import './Footer.css';

function Footer(){
    return(
        <div className="main" id="footer">
            <span >
                <h4 className="ank">ABOUT US</h4>
                <p className="ank">Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable 
                    businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
            </span>
            <span id="ff">
                <h4 className="ank">MENUS</h4>
                <a href="https://rubixe.com/" className="ank">Home</a><br />
                
                <a href="https://rubixe.com/services/" className="ank">Services</a><br />
                <a href="https://rubixe.com/products/"className="ank">Products</a><br />
                <a href="https://rubixe.com/career/" className="ank">Career</a><br />
            </span>
            <span id="ff">
                <h4 className="ank">LEARN MORE</h4>

                <a href="https://rubixe.com/about/" className="ank">About</a><br />
                <a href="https://rubixe.com/contact-us/" className="ank">Contact Us</a>
            </span>
            <span id="ff">
                <h4 className="ank">ADDRESS</h4>
                <p className="ank">Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka 560068
                    Phone: 0804-717-8999
                    Email: hi@rubixe.com</p>
                <h4 className="ank">SOCIAL MEDIA</h4>
                <div id="ffin">
                <span className="fin">
                <a href="https://www.facebook.com/Rubixe.Official/" id="me"><h4>f</h4></a>
                </span>
                <span className="fin">
                <a href="https://www.linkedin.com/company/rubixe/" id="me"><h4>in</h4></a>
                </span>
                </div>
            </span>
            
        </div>
    )
}
export default Footer;