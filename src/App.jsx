import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import About from './components/about/About';
import Blog from './components/blog/Blog';

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Blog/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App