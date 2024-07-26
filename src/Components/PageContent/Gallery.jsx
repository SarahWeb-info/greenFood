import React , {useState , useEffect} from 'react'
import carouselData from "../../assets/data/mainCarouselData";
import { RiZoomInFill } from "react-icons/ri";
import Heading from '../../Components/Heading';
import Dialog from "../Dialog/Dialog";

export default function Gallery() {

  const [imgForDialog, setImgForDialog] = useState();
  const [displayDialog, setDisplayDialog] = useState(false);
  const [filteredArray, setfilteredArray] = useState([]);
  
  const setCatagory =(x)=>{
    let array = carouselData.filter(element => element.catagory === x);
    setfilteredArray(array);
  }
  
  const showAllCatagory =()=>{
    setfilteredArray(carouselData);
  }

  useEffect(() => {
    showAllCatagory();
  }, []);

  const openDialog=(img)=>{
    setDisplayDialog(true);
    setImgForDialog(img);
  }

  const closeDialog=()=>{
    setDisplayDialog(false);
  }

  return (
    <section>
      <Heading subheading1 = "Our"  subheading2 = "Gallery" />

      <div className='flexCenter wrap btnbar'>
        <button className='themeBtn' onClick={showAllCatagory}>All</button>
        <button className='themeBtn' onClick={()=>setCatagory("salad")}>Salad</button>
        <button className='themeBtn' onClick={()=>setCatagory("drink")}>Drinks</button>
        <button className='themeBtn' onClick={()=>setCatagory("breakfast")}>Breakfast</button>
        <button className='themeBtn' onClick={()=>setCatagory("lunch")}>Lunch</button>
        <button className='themeBtn' onClick={()=>setCatagory("dinner")}>Dinner</button>
      </div>

      <div className={`fullwidth flexInline wrap justifyCenter gap5`}>
      {
        filteredArray && filteredArray.map((item, index) => (
        <div key={index} className='smCurtainSlides-Container curtainSlides-Container'>
          <div className='slide'>
            <img src={item.img} alt="" />
            <p>{item.h1}</p>
            <p>{item.catagory}</p>
          </div>
          <div className='curtain flexCenter' onClick={()=>openDialog(item.img)}>
            <RiZoomInFill />
          </div>
        </div>
      ))
     }
    </div>

    {filteredArray.length === 0 &&
      <div className='flexCenter'>
        <p className='themeHeading' >Coming Soon !</p>
      </div> 
     }

     {displayDialog && 
        <Dialog closeFunction={closeDialog}>
          <img src={imgForDialog} alt="Dialog content" />
        </Dialog>
     }

    </section>
  )
}
