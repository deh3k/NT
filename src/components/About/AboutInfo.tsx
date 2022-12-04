import { motion } from 'framer-motion'
import React from 'react'
import { fadeVariants } from '../../variants/fadeVariants'
import Button from '../Common/Button'
import './About.scss'

export default function AboutInfo() {
  return (
    <motion.div className='about__info'
      variants={fadeVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className='about__wrapper'>
        <h1 className="title">About Us</h1>
        <p className='about__p'>
          <b>We’re a team of four passioned people.</b>
        </p>
        <p className='about__p'>
          We’re ready to take the world by storm and
          let you find new travel opportunities.
        </p>
        <p className='about__p'>
          Our everyday task is to make sure that you satisfied
          with the services and products that we provide.
        </p>
      </div>
      <a href="#"><Button>READ MORE ABOUT US</Button></a>
    </motion.div>
  )
}
