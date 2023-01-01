import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Technical & Creative Writing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing user manuals, instructions, and documentation for technical products and processes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating technical reports and presentations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing and editing technical articles for trade publications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Crafting marketing and advertising copy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing speeches and scripts for film, television, and theater</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing technical content for websites and online platforms</p>
            </li>
          </ul>
        </article>
        {/* END OF TECHNICAL WRITING */}

        
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Building and maintaining websites and web applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementing responsive design for mobile compatibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimizing website performance and security</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Testing and debugging web applications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrating databases and backend systems</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing ideas for and writing blog posts, articles, and other types of content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating graphics, videos, and other multimedia content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managing and curating content for social media platforms</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating and distributing newsletters and email campaigns</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing content marketing strategies and plans</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services