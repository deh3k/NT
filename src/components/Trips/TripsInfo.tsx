import { motion } from 'framer-motion'
import React from 'react'
import Button from '../Common/Button'

interface Content {
  title: string
  describe: string[]
  img: string
}

interface IProps {
  content: Content
}

const itemVariant = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  inactive: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.5
    }
  }
};



export default function TripsInfo({ content }: IProps) {
  return (
    <motion.div className='trips__item'
      variants={itemVariant}
      whileInView="active"
      initial="inactive"
    >
      <div className='trips__item__img'>
        <img src={content.img} alt="" />
      </div>
      <div className='trips__item__info'>
        <h5 className='trips__item__title'>{content.title}</h5>
        <p><b>{content.describe[0]}</b></p>
        <p>{content.describe[1]}</p>
        <a href="#"><Button>SEE OUR LATEST OFFER</Button></a>
      </div>
    </motion.div>

  )
}
