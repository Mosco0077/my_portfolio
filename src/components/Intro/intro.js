import React from 'react';
import './intro.css';
import bgImg from '../../assets/image.png'
import {Link} from 'react-scroll'
import btnImg from '../../assets/hireme.png'


export default function Intro() {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Edward Omere</span> <br /> A Student </span>
            <p className='introPara'> I am on a mission to  <br />transform Africa through Tech</p>
            <Link to="#about"><button className='btn'><img className='btnImg' src={btnImg} alt="introImg"/>More On Me</button></Link>
        </div>
     <img className='bgImg' alt='bgImg' src={bgImg}/>
    </section>
  )
}
