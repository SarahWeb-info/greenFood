import React from 'react'
import Heading from '../../Components/Heading';
import teamArray from "../../assets/data/team";
import { TiSocialLinkedin , TiSocialFacebook , TiSocialInstagram} from "react-icons/ti";

export default function Team() {

  return (
    <section>
      <Heading subheading1 = "Our"  subheading2 = "Team" />

      <div className='fullwidth flexInline justifyAround wrap'>
      {
        teamArray && teamArray.map((item, index) => (
          <div  key={index} className='lgCurtainSlides-Container curtainSlidesContainer-Wrapper shadow' >
            <div className='curtainSlides-Container'>
                <div className='slide'>
                <img src={item.img} alt="" />
            </div>
            <div className='curtain flexCenter'>
              <a href="http://" target="_blank" rel="noopener noreferrer"><TiSocialLinkedin /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"><TiSocialFacebook /></a>
              <a href="http://" target="_blank" rel="noopener noreferrer"><TiSocialInstagram /></a>
            </div>
            
            </div>
              <p>{item.title}</p>
              <p className='highlight'>{item.name}</p>

          </div>
      ))
     }
    </div>
  
  </section>
  )
}
