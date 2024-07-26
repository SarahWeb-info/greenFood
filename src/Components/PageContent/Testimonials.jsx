import React from 'react';
import Heading from '../../Components/Heading';
import Slider from '../../Components/Slider/Slider';
import testimonials from '../../assets/data/testimonials';

export default function Testimonials() {
  return (
    <section>
      <div>
        <Heading subheading1 = "Customer's"  subheading2 = "Testimonials" />
      </div>
      <div>
      <Slider 
        sliderData ={testimonials} 
        sliderContainerHeight = '65' 
        />
      </div>
    </section>
  )
}
