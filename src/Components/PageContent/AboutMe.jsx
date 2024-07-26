import React from 'react'
import Img from '../../assets/imgs/img5.webp';
import { SlBadge } from "react-icons/sl";
import { FaBuilding } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

export default function AboutMe() {
  return (
    <section className='aboutMe flexInline justifyAround alignCenter wrap'>

        <img src={Img} alt="Image Alt Text" />

        <div>
        <h2 className='themeHeading'>Welcome to Eat Green</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus eveniet dolore deleniti dolorum laboriosam sit! Ad omnis iste ab iure obcaecati? Similique inventore eveniet porro eius incidunt voluptas rem!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus eveniet dolore deleniti dolorum laboriosam sit! Ad omnis iste ab iure obcaecati? Similique inventore eveniet porro eius incidunt voluptas rem!</p>
        <a href="http://" target="_blank" rel="noopener noreferrer" className='themeBtn'>More Details</a>

        <div className='aboutInfo fullwidth flexInline justifyAround gap5'>
            <div>
            <p><SlBadge/></p>
            <p>10+</p>
            <p>Awards</p>
            </div>
            <div>
            <p><FaBuilding/></p>
            <p>5+</p>
            <p>Branches</p>
            </div>
            <div>
            <p><IoIosPeople/></p>
            <p>50+</p>
            <p>Staff</p>
            </div>
        </div>
        </div>

    </section>

  )
}
