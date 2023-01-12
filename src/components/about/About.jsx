import React from 'react'
import './about.css'
import ME from "../../assets/me4back.jpg";
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
           <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Months Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>4+ Worldwide </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Repositories</h5>
              <small>20+ Repositories</small>
            </article>
           </div>

           <p>
           Hello and welcome to my professional portfolio! My name is Egbonu Kenechukwu and I am a versatile individual with a diverse range of skills and interests. As a Front-End Developer, I pride myself on creating visually stunning and intuitive websites that provide a seamless user experience. Additionally, I am a Technical Writer (✍) with a background in computer science and a passion for effectively communicating complex ideas. I am glad you have taken the time to visit my portfolio and I hope you find the projects on display to be informative and a showcase of my capabilities.
           </p>

           <a href="#contact" className='btn btn-primary'>Lets Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About