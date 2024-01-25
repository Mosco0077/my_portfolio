import React from 'react'
import './skills.css'
import UiDesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import appDesign from '../../assets/app-design.png'

function Skills() {
  return (
    <section id='skills'>
      <span className="skillTitle">What I do</span>
      
      <div className="skillDesc">My Name is Edward Omere and I am a student of centennial college studying 
      <br/>
      software programming technician. 
      My work is mostly to build and design products that people love</div>
      
      <div className="skillBars">
        
        <div className="skillBar">
          <img src={UiDesign} alt="uiDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UiUx Design</h2>
            <p>I am currently working on mastering UIUX as a student.</p>
          </div>
        </div>
        
        <div className="skillBar">
          <img src={webDesign} alt="webDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>I am currently learning web design and development.</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={appDesign} alt="appDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>I have a desire to learn app development and design particularly in the context of UIUX.</p>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Skills