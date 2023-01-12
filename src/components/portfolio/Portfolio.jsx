import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/opuspot.PNG'
import IMG2 from '../../assets/reactpot.PNG'
import IMG4 from '../../assets/traversypot.PNG'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>OPUS(WEB)</h3>
            <div className="portfolio__item-cta">
              <a href="https;//github.com/anonWilder" className='btn'>GitHub</a>
              <a href="https://netlify.com" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>



        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>REACT PORTFOLIO(WEB)</h3>
            <div className="portfolio__item-cta">
              <a href="https;//github.com/anonWilder" className='btn'>GitHub</a>
              <a href="https://netlify.com" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>HOST-MONSTER(WEB)</h3>
            <div className="portfolio__item-cta">
              <a href="https;//github.com/anonWilder" className='btn'>GitHub</a>
              <a href="https://netlify.com" className='btn btn-primary'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio