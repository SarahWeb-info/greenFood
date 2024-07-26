import React from 'react'
import Heading from '../../Components/Heading';
import 'leaflet/dist/leaflet.css';
import Map from "../Map";

export default function ContactUs() {
  return (
  <section> 
    <div>
      <Heading subheading1 = "Contact"  subheading2 = "Us" />
    </div>
    
    <div className='contactForm shadow flexInline justifyAround alignCenter wrap'>

      <div>
        <Map />
      </div>

       <form>
        <h3>Get in touch</h3>
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <textarea rows="4" placeholder='Message'/>
        <button className='themeBtn'>Submit</button>
      </form>

    </div>

  </section>
  )
}
