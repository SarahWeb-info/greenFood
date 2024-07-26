import React, { useState, useEffect } from 'react';
import './Slider.css';
import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa6";

export default function Slider({
  sliderData = [],
  sliderContainerHeight = 50,
  sliderContainerWidth = 100,
  displaySlide = 3,
  responsive = true,
  responsiveBreakers = 400 , 
  sliderBg = 'transparent',
  autoplay = true,
  handleAutoPlayOnMouseEnter = true,
  timeInterval = 2000,
  arrows = true,
  sliderDots = true,
  clickablesliderDots = true 
}) {

  const [totalSlide, setTotalSlide] = useState(displaySlide);

  const handleResponsive = () =>{
      if (window.innerWidth > responsiveBreakers) {
        setTotalSlide(displaySlide);
      }else{
        setTotalSlide(1);
      }
  }
  
  useEffect(() => {
    if (responsive) {
      window.addEventListener('resize', handleResponsive);
    }

    return () => {
      if (responsive) {
        window.removeEventListener('resize', handleResponsive);
      }
    };
  }, [window.innerWidth]);

  const sliderWidth = arrows ? sliderContainerWidth - 10 : sliderContainerWidth;
  const li_Width = parseInt(sliderWidth / totalSlide, 10);
  const totalDots = Math.ceil(sliderData.length / totalSlide);

  const [activeReel, setActiveReel] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => setIsMouseOver(true);
  const handleMouseLeave = () => setIsMouseOver(false);

  const leftSlide = () => {
    setActiveReel(preReel => (preReel > 0 ? preReel - 1 : totalDots - 1));
  };

  const rightSlide = () => {
    setActiveReel(preReel => (preReel < totalDots - 1 ? preReel + 1 : 0));
  };

  const goToSlide = (index) => setActiveReel(index);

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(() => {
        if (!isMouseOver) {
          rightSlide();
        }
      }, timeInterval);

      return () => clearInterval(intervalId);
    }
  }, [autoplay, isMouseOver, timeInterval]);

  return (
    <div
      className='sliderContainer flexInline gap5 noWrap alignCenter justifyCenter'
      style={{ height: `${sliderContainerHeight}vh`, width: `${sliderContainerWidth}vw`, background: sliderBg }}
      onMouseEnter={handleAutoPlayOnMouseEnter ? handleMouseEnter : undefined}
      onMouseLeave={handleAutoPlayOnMouseEnter ? handleMouseLeave : undefined}
    >
      <div style={{ width: `${sliderWidth}vw` }}>
        <ul className='slider flexInline noWrap alignCenter justifyAround' style={{ transform: `translateX(-${activeReel * sliderWidth}vw)` }}>
          {sliderData.map((slide, index) => {
            const stars = Array.from({ length: slide.rating }, (_, i) => <FaStar key={i} />);
            return (
              <li
                key={index}
                className='flexCenter'
                style={{ width: `${li_Width}vw` }}
              >
                <div className='flexCol shadow'>
                  <div className='sliderContent flexInline gap5 noWrap alignCenter'>
                    <div className='flexCol alignCenter'>
                      <img src={slide.img} alt={slide.name} />
                      <div className='highlight'>{stars}</div>
                    </div>
                    <div className='flexCol justifyCenter'>
                      <p className='sliderLabel_1'>{slide.name}</p>
                      <p className='sliderLabel_2 highlight'>{slide.title}</p>
                    </div>
                  </div>
                  <p className='slider-Comment'>{slide.comment}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {arrows &&
        <div className='arrows fullwidth flexInline justifyBetween alignCenter'>
          <div onClick={() => leftSlide()}><FaAngleLeft /></div>
          <div onClick={() => rightSlide()}><FaAngleRight /></div>
        </div>
      }

      {sliderDots &&
        <div className='sliderDots'>
          {Array.from({ length: totalDots }, (_, index) => (
            <div
              key={index}
              className={index === activeReel ? 'active' : ''}
              onClick={clickablesliderDots ? () => goToSlide(index) : undefined}
            ></div>
          ))}
        </div>
      }
    </div>
  );
}
