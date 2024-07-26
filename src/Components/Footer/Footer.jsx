import React from 'react'
import './footer.css';
import { ImPhone , ImMail3 , ImArrowRight2 } from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";
import { TiSocialLinkedin , TiSocialFacebook , TiSocialInstagram} from "react-icons/ti";

export default function Footer() {
  return (
    <section className='footer flexInline wrap gap5 justifyBetween'>
        <div className='flexCol '>
          <h3>Contact Info</h3>
          <p><span><ImPhone /></span> +111-222-333</p>
          <p><span><ImMail3 /></span> abc@gmail.com</p>
          <p><span><IoLocationSharp /></span> Karachi , Pakistan</p>
          <p className='footerIcons flexInline gap5'><span><TiSocialLinkedin /> </span><span> <TiSocialFacebook /> </span><span> <TiSocialInstagram /></span></p>
        </div>

        <div className='flexCol'>
          <h3>Opening Hours</h3>
          <b className='highlight'>Monday - Saturday </b>
          <p>10:00 AM - 8:00 PM</p>
        </div>

        <div className='flexCol footer_QuickLinks'>
          <h3>Quick Links</h3>
          <div><span><ImArrowRight2 /></span> <a href="#home"> Home</a></div>
          <div><span><ImArrowRight2 /></span> <a href="#aboutMe"> About</a></div>
          <div><span><ImArrowRight2 /></span> <a href="#menu"> Menu</a></div>
          <div><span><ImArrowRight2 /></span> <a href="#gallery"> Gallery</a></div>
          <div><span><ImArrowRight2 /></span> <a href="#team"> Team</a></div>
          <div><span><ImArrowRight2 /></span> <a href="#testimonial"> Testimonials</a></div>
          <div><span><ImArrowRight2 /></span> <a href="#contactUs"> Contact</a></div>         
        </div>

        <div className='footerEnd flexCenter gap5'>
          <p>Design by <a href='' className='highlight'>SarahWeb</a> | All Rights Reserverd</p>
        </div>
    </section>
  )
}
