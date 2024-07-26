import React , {useState , useEffect } from 'react'
import carouselData from "../../assets/data/mainCarouselData";
import Heading from '../../Components/Heading';

export default function Menu() {
  
  const [catagoryArray, setCatagoryArray] = useState([]);
  const [catagoryLength, setCatagoryLength] = useState(0);

  const setCatagory = (categoryString) => {
    const filteredArray = carouselData.filter(element => element.catagory === categoryString);
    setCatagoryArray(filteredArray);
    setCatagoryLength(filteredArray.length);
  };

  useEffect(() => {
    setCatagory("salad");
  }, []);

  return (
    <section>
    <Heading subheading1 = "Our"  subheading2 = "Menu" />
    
    <div className='flexCenter wrap btnbar'>
      <button className='themeBtn' onClick={()=>setCatagory("salad")}>Salad</button>
      <button className='themeBtn' onClick={()=>setCatagory("drink")}>Drinks</button>
      <button className='themeBtn' onClick={()=>setCatagory("breakfast")}>Breakfast</button>
      <button className='themeBtn' onClick={()=>setCatagory("lunch")}>Lunch</button>
      <button className='themeBtn' onClick={()=>setCatagory("dinner")}>Dinner</button>
    </div>

    <div className={`fullwidth flexInline wrap ${catagoryLength > 5 ? '' : 'justifyCenter'} gap5`}>

      {
        catagoryArray && catagoryArray.map((item, index) => (
          
        <div key={index}  className='flexInline noWrap smCards'>
          <div className='smcard-ImgDiv flexCenter'>
            <img src={item.img} alt=""/>
          </div>
          
          <div className='smcard-ContentDiv'>
            <div className='fullwidth flexInline alignCenter justifyBetween dashed noWrap'>
              <p className='cardHeading highlight'>{item.h1}</p>
              <p>{item.cost}</p>
            </div>
            
            <p className='smcard-detail'>{item.detail}</p>
          </div>
        </div>
        
      ))
     }
    </div>
     {catagoryArray.length === 0 &&
      <div className='flexCenter'>
        <p className='themeHeading' >Coming Soon !</p>
      </div> 
     }  
    </section>
  )
}
