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
              <a href="https://github.com/anonWilder" className='btn' target='_blank'>GitHub</a>
              <a href="https://accessify.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>Tribute Website</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/anonWilder" className='btn' target='_blank'>GitHub</a>
              <a href="https://tribute4blankson.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>HOST-MONSTER(WEB)</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/anonWilder" className='btn' target='_blank'>GitHub</a>
              <a href="https://hostmonster.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio