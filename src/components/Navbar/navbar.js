import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
// import { Link as AnchorTag } from 'react-router-dom'
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);


  return (
  <nav className='navbar'>
    <img src={logo} alt='logo' className='logo'/>
    <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true}
        offset={-100} duration={500} className='desktopMenuLinkItem'>
          {/* <AnchorTag to={'/'}>
            Home
         </AnchorTag> */}
         Home
        </Link>
      <Link activeClass='active' to='about' spy={true} smooth={true}
      offset={-100} duration={500} className='desktopMenuLinkItem'>
        {/* <AnchorTag to={'/aboutus'}>
          About Me
        </AnchorTag> */}
      About Me
      </Link>
      <Link activeClass='active' to='skills' spy={true} smooth={true}
      offset={-100} duration={500} className='desktopMenuLinkItem'>
        {/* <AnchorTag to={'/skills'}>
          Services
        </AnchorTag> */}
        Services
      </Link>
      <Link activeClass='active' to='projects' spy={true} smooth={true}
      offset={-100} duration={500} className='desktopMenuLinkItem'>
       {/* <AnchorTag to={'/projects'}>
          Projects
        </AnchorTag>  */}
        Projects
      </Link>
      <Link activeClass='active' to='contactPage' spy={true} smooth={true}
      offset={-100} duration={500} className='desktopMenuLinkItem'>
        {/* <AnchorTag to={'/contact'}>
          Contact
        </AnchorTag>  */}
        Contact Me
      </Link>
      </div>
      
    <img src={menu} alt='mobMenu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
    <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
    <Link activeClass='active' to='intro' spy={true} smooth={true}
     offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
    <Link activeClass='active' to='about' spy={true} smooth={true}
     offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About Me</Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true}
     offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Services</Link>
    <Link activeClass='active' to='projects' spy={true} smooth={true}
     offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
    <Link activeClass='active' to='contactPage' spy={true} smooth={true}
     offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact Me</Link>
    </div>

    <button className='desktopMenuBtn' onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'})
    }}>
        <img src={contactImg} className='desktopMenuImg' alt="contactImg"/>
        Contact Me 
    </button>
  </nav>
  )
}

export default Navbar