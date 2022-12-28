import React from "react";
import imgg from './imgg.png'
import './Header.css'

function Header(){
    return(
        <div className="header">
        <img src={imgg} alt="logo" id="imgg" />
        <a href="https://rubixe.com/" className="an">HOME</a>
        <a href="https://rubixe.com/services/" className="an">SERVICES</a>
                <a href="https://rubixe.com/products/"className="an">PRODUCTS</a>
                <a href="https://rubixe.com/ai-internship-program/internship-form" className="an">AI INTERNSHIP</a>
                <a href="https://rubixe.com/career/" className="an">CAREER</a>
                <a href="https://rubixe.com/blog/" className="an">BLOG</a>
                <a href="https://rubixe.com/about/" className="an">ABOUT</a><br />
                <a href="https://rubixe.com/contact-us/" className="an">CONTECT US</a>
        
        </div>
    )
}
export default Header;