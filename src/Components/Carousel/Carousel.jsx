import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { FaAngleLeft , FaAngleRight } from "react-icons/fa6";

export default function Carousel({
  carouselData = [],
  carouselLimit=undefined,
  carouselContainerHeight = '70',     //carousel styling
  carouselContainerWidth = '100', 
  fullHeightSlide = false ,
  fullWidthSlide = true ,
  carouselBg = 'transparent',
  autoplay = true ,       // carousel functioning
  handleAutoPlayOnMouseEnter = true ,
  timeInterval = '2000' , 
  arrows = false , 
  carouselDots = true , 
  clickablecarouselDots = true ,
  slideCount = false 
}) {

  if (carouselLimit) {
    carouselLimit = parseInt(carouselLimit);
  }else{
    carouselLimit = carouselData.length;
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(true);

  const handleMouseEnter = () => {
    if (handleAutoPlayOnMouseEnter) {
      setIsMouseOver(false);
    }
  };

  const handleMouseLeave = () => {
    if (handleAutoPlayOnMouseEnter) {
      setIsMouseOver(true);
    }
  };
  
  useEffect(() => {
    if (autoplay && isMouseOver) {
      
      const timer = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % carouselLimit);
      }, timeInterval); 
      
      return () => {
        clearInterval(timer); 
      };
    }
  }, [carouselData.length , isMouseOver]);

  let li_Height =`${carouselContainerHeight}vh`;
  let li_Width =`${carouselContainerWidth}vw`;

  if (!fullHeightSlide) {
    li_Height = `calc(${carouselContainerHeight}vh * 0.94 )`;
  }
  
  if (!fullWidthSlide) {
    li_Width =`calc(${carouselContainerWidth}vw * 0.8 )`;
  }

  const goToSlide = (i) =>{
    
      setActiveIndex(i % carouselLimit);
    handleMouseEnter();
  }

  const rightSlide = ()=>{
    
    if (activeIndex < carouselLimit ) {
      setActiveIndex(prevIndex => (prevIndex + 1) % carouselLimit);
    }else {
      setActiveIndex(0);
    }
    handleMouseEnter();
  }

  const leftSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex(prevIndex => (prevIndex - 1) % carouselLimit);
    } else {
      setActiveIndex(carouselLimit - 1);
    }
    handleMouseEnter(); 
  }

  return (
    <div id='home' style={{ height: `${carouselContainerHeight}vh` ,width: `${carouselContainerWidth}vw`,background : carouselBg , position:'relative'  }}>

      <ul className='carousel' style={{ transform: `translateX(-${activeIndex * carouselContainerWidth}vw)` , height: li_Height }} >
      
      {carouselData.slice(0, carouselLimit ).map((slide, index) => (
          <li 
            key={index}
            style={{height: li_Height , width : `${carouselContainerWidth}vw` }}
            onMouseEnter={handleAutoPlayOnMouseEnter ? handleMouseEnter : undefined}
            onMouseLeave={handleAutoPlayOnMouseEnter ? handleMouseLeave : undefined}
          >
            <img src={slide.img} alt="" style={{height: li_Height , width : li_Width }}/>
            <div className='carouselContent' style={{height: li_Height , width : li_Width }}>
              <p className='carouselLabel_1 themeHeading' style={{color : 'var(--col1) !important'}}>{slide.h1}</p>
              <p className='carouselLabel_2'>{slide.h2}</p>
              <a className='carouselLink themeBtn' href={slide.linkAddress}>{slide.linkText}</a>
            </div>
          </li>
        ))
      }     
      </ul>

      {
        arrows &&
        <div className='arrows' style={{ width: `${carouselContainerWidth - 8}vw` }}>
          <div onClick={leftSlide}><FaAngleLeft /></div>
          <div onClick={rightSlide}><FaAngleRight /></div>
        </div>
      }


      {
        slideCount && 
        <i className='slideCount'>
          {activeIndex+1} of {carouselData.length}
        </i>
      }

      {carouselDots && 
        <div className='carouselDots'>
          {carouselData.slice(0, carouselLimit ).map((slide, index) => (
            <div key={index} className={index === activeIndex ? 'active' : ''} onClick={clickablecarouselDots ? () => goToSlide(index) : undefined}></div>
          ))}
        </div>
      }
 

    </div>
  )
}
