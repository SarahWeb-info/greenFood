import React, { useState, useEffect } from 'react';
import carouselData from "../../assets/data/mainCarouselData";
import Heading from '../../Components/Heading';

export default function Deals() {
  const showTotalCards = 3;
  const dealsArr = [];
  const [displayElements, setDisplayElements] = useState(0);

  carouselData.forEach(element => {
    if (element.discount) {
      dealsArr.push(element);
      if (displayElements < showTotalCards) {
        setDisplayElements(displayElements+1);
      }
    }
  });
  
  const handleShowMore = () => {
    setDisplayElements(displayElements + showTotalCards);
  };

  return (
    <section>
      <Heading subheading1 = "Special"  subheading2 = "Deals" />

      <div className={`fullwidth flexInline wrap ${displayElements > 5 ? '' : 'justifyCenter'}`}>
        {dealsArr && 
          dealsArr.slice(0, displayElements).map((item, index) => (
            
            <div key={index} className='flexInline noWrap smCards'>

              <div className='smcard-ImgDiv flexCenter'>
                <img src={item.img} alt=""/>
              </div>

              <div className='smcard-ContentDiv'>
                <div className='fullwidth flexInline noWrap alignCenter justifyBetween dashed'>
                  <p className='cardHeading highlight'>{item.h1}</p>
                  <p><span className="strike-through">{item.cost}</span> {item.discount}<small>OFF</small> </p>
                </div>

                <p className='smcard-detail'>{item.detail}</p>
              </div>

            </div>
          ))
        }
      </div>

      {displayElements < dealsArr.length && 
        <div className='flexEnd'>
          <button className='themeBtn' onClick={handleShowMore}>More</button>
        </div>
        }
    </section>
  );
}
