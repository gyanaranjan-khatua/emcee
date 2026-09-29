import React from 'react'
import Faq from '../sections/Faq'
import Testimonial from '../sections/Testimonial'
import ServiceSection from '../sections/ServiceSection'
import HeroSection from '../sections/HeroSection'
import Stats from '../sections/Stats'
import AboutSection from '../sections/AboutSection'
import Slider from '../sections/Slider'
import ProfessionalEmcee from '../sections/ProfessionalEmcee'

function Home() {
  return (
    <>
    <HeroSection/>
    <Stats/>
    <ServiceSection/>
    <ProfessionalEmcee/>
    <AboutSection/>
    <Slider/>
    <Testimonial/>
    <Faq/> 
    </>
   
  )
}

export default Home