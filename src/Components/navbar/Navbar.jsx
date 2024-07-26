import React , {useState , useEffect} from 'react'
import './navbar.css' ; 
import icon from '../../assets/imgs/icon.png';
import { FaBars ,FaX } from "react-icons/fa6";
import Dialog from "../Dialog/Dialog";

export default function Navbar() {

  const [displayMenu, setDisplayMenu] = useState(false);

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [mobileView, setMobileView] = useState(true);
  const [changeNavBg, setChangeNavBg] = useState(false);
  const [displayDialog, setDisplayDialog] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    if (windowSize > 750) {
      setMobileView(false);
      setDisplayMenu(true);
    } else {
      setMobileView(true);
      setDisplayMenu(false);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setChangeNavBg(true);
      } else {
        setChangeNavBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showNavMenu =()=>{
    setDisplayMenu(!displayMenu);
  }

  const showDialog =() =>{
    setDisplayDialog(true);
  }

  const closeDialog=()=>{
    setDisplayDialog(false);
  }

  return (
    <header className='navbar' style={{ backgroundColor: changeNavBg ? 'black' : 'transparent' }}>
      {mobileView &&
        <button className='NavMenuBtn' onClick={showNavMenu} > {displayMenu?<FaX />:<FaBars />}</button>
      }

      <a href="http://"  className='logoBox'>
        <img src={icon} alt="Logo" />
        <p>Eat<span className='highlight'>Green</span></p>
      </a>

      <nav style={displayMenu ? { transform: 'translateX(0)' } : { transform: 'translateX(-200%)' }}>
        <a href="#home">Home</a>
        <a href="#aboutMe">About</a>
        <a href="#menu">Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#team">Team</a>
        <a href="#testimonial">Testimonials</a>
        <a href="#contactUs">Contact</a>
      </nav>
      
      <button className='navBtn' onClick={showDialog}>button</button>

      {displayDialog && 
        <Dialog closeFunction={closeDialog}>
          <form>
            <h3>BOOK YOUR TABLE</h3>
            <div className='flexInline gap5'>
              <input type="text" placeholder='Name' />
              <input type="text" placeholder='Email' />
            </div>
            <div className='flexInline gap5'>
              <input type="number" placeholder='Number' />
              <input type="date" placeholder='Date' />
            </div>
            <div className='flexInline gap5'>
              <input type="time" placeholder='time' />
              <input type="number" placeholder='Guest' />
            </div>
            <textarea rows="4" placeholder='Message'/>
            <button  className='themeBtn'>Submit</button>
          </form>
        </Dialog>
     }

    </header>
  )
}
