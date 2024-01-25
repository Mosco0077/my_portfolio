import React from 'react'
import './projects.css'
import portfolio1 from '../../assets/portfolio-1.png'
import portfolio2 from '../../assets/portfolio-2.png'
import portfolio3 from '../../assets/portfolio-3.png'
import Card from 'react-bootstrap/Card';

const Projects = () => {
  return (
    <div className='container' id='projects'>
        <span className="projectsTitle">My Projects</span>
      
      <div className="projectsDesc sm:12">These are some of the projects I have done so far.</div>
    <div className="card-section">
    
    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={portfolio1} />
      <Card.Body>
        <Card.Title className='card-text'>Activist Website</Card.Title>
        <Card.Text className='card-p'>
          Activist Website Built By Me
        </Card.Text>
        <a variant="primary" className='btn mt-4' href='#contact'>Contact Me</a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={portfolio2} />
      <Card.Body>
        <Card.Title className='card-text'>Ecommerce Website</Card.Title>
        <Card.Text className='card-p'>
          I am currently working on this Ecommerce website
        </Card.Text>
        <a variant="primary" className='btn mt-4' href='#contact'>Contact Me</a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='card'>
      <Card.Img variant="top" src={portfolio3} />
      <Card.Body>
        <Card.Title className='card-text'>Kitchen Supply</Card.Title>
        <Card.Text className='card-p'>
          Kitchen supply website designed for the supply of kitchen utensils.
        </Card.Text>
        <a variant="primary" className='btn mt-4' href='#contact'>Contact Me</a>
      </Card.Body>
    </Card>
    
    </div>
      
    </div>
  )
}

export default Projects
