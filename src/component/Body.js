import React from "react";
import './Body.css';
import Haf from './Haf.jpg'
function Body(){
    return(
        <div >
        <div className="main"  id="haf">
        <h2>WHO WE ARE</h2>
        <div id="half">
            <span>
            
            <span>Rubixe<sup>TM</sup> is a global technology company specializing in disruptive technology- 
            Artifiial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA),
            Block Chain, and Interner of Things (IoT).     
            </span><br /><br />
            <span>Rubixe<sup>TM</sup> is to enable businesses to leverage the full potential to disruptive
             technologies and stay competitive stay competitive in the market, turning complex challenges into
             Solutions, providing a strategic competitive advantage that are more efficient, effective and predictable.
            </span>
            </span>
            <span>
                <img src={Haf} alt="Haf" id="ha" />
            </span>
            </div>
        </div>
        <div id="p2" className="main">
            <h2>WHERE WE STARTED</h2>
            <p>We started in 2015, With a passionate team who want to bring game-changing solutions through technologies.We expertise in 
                delivering enterprise-level solutions in the field of Artificial Interlligence(AI). Cyber Security, Rovotic Process Automation (RPA),
                Internet of Things(IoT), and BlockChain technology.
            </p>
        </div>
        </div>
    )
}
export default Body;
