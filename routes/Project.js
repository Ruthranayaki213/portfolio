import React from 'react'
import Navbaar from "../components/Navbaar";
import HeroImg2 from '../components/HeroImg2';
import WorkCard from '../components/WorkCard';

import Footer from "../components/Footer";
const Project = () => {
  return (
    <div>
      <Navbaar/>
      <HeroImg2 heading="PROJECT"  text="Some of my recent works"/>
      <WorkCard/>
      <Footer/>
      
    </div>
  )
}

export default Project
