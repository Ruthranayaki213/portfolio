import "./HeroImgStyles.css";

import React from 'react'
import IntroImg from "../assets/bg1.jpg"
import {Link} from "react-router-dom"


const HerooImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg"/>

        </div>
        <div className="content">
            <p>Hi, I'm Ruthranayaki J.</p>
            <h1>A Full Stack Developer</h1>
            <div>
                
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HerooImg
