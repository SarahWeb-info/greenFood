import React from 'react'
import './App.css';
import './cards.css';
import Navbar from './Components/navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import carouselData from './assets/data/mainCarouselData';
import AboutMe from "./Components/PageContent/AboutMe";
import Deals from './Components/PageContent/Deals'
import Menu from "./Components/PageContent/Menu";
import Gallery from "./Components/PageContent/Gallery";
import Team from "./Components/PageContent/Team";
import Testimonials from "./Components/PageContent/Testimonials";
import ContactUs from "./Components/PageContent/ContactUs";
import Footer from "./Components/Footer/Footer";
import UpButton from "./Components/PageContent/upButton";

const App = () => {

  return (
    <>
      <Navbar />
      <UpButton />
      <Carousel 
        carouselData ={carouselData} 
        carouselLimit = {4} 
        carouselContainerHeight = {85} 
        fullHeightSlide = {true} 
      />
      
      <div id='aboutMe' className='pins'></div>
      <AboutMe />
      <Deals />
      <div  id="menu" className='pins'></div>
      <Menu />
      <div  id='gallery' className='pins'></div>
      <Gallery />
      <div  id="team" className='pins'></div>
      <Team />
      <div  id="testimonial"className='pins'></div>
      <Testimonials />
      <div id='contactUs'className='pins'></div>

      <ContactUs />
      <Footer />      
    </>
  )
}

export default App