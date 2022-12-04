import React from 'react'
import './About.scss'
import AboutInfo from './AboutInfo'
import AboutTeam from './AboutTeam'

const teamItems = [
  {
    id: 0,
    img: 'https://global-uploads.webflow.com/5dd71023be267040852b0f0e/62e9bb47ba10f5dbbfef0b5d_San%20Francisco%20-%20Online%20Dating%20Photographer%20-%201-pichi.jpg',
    name: 'OLIVIA AMES',
    job: 'CEO',
  },
  {
    id: 1,
    img: 'https://global-uploads.webflow.com/5dd71023be2670822b2b0f25/61ccfefaf689b17a4378b4e1_San%20Diego%20Dating%20Profile%20Photographer%20-%20Man%20smiling%20example-pichi-p-500.jpeg',
    name: 'ADAM SMITH',
    job: 'MANAGER',
  },
  {
    id: 2,
    img: 'https://global-uploads.webflow.com/5dd71023be267040852b0f0e/62e9bb0a156de840e0ac7b07_Toronto%20Dating%20Photographer%20Example%20-%20Stephen-pichi.jpg',
    name: 'HARRIS JOHNSON',
    job: 'CTO',
  },
  {
    id: 3,
    img: 'https://global-uploads.webflow.com/5dd71023be2670822b2b0f25/63291ba99b98163873919dce_Phoenix%20AZ%20-%20Tinder%20Profile%20Examples%20-%20Men%20over%2040-p-500.jpg',
    name: 'BAKER TURNER',
    job: 'CSO',
  },
]

export default function About() {
  return (
    <div className="about container">
      <AboutInfo />
      <div className='about__team'>
        {teamItems.map((item, i) =>
          <AboutTeam key={item.id} i={i} content={item} />
        )}
      </div>
    </div>
  )
}
