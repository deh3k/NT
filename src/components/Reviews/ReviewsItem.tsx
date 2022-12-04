import { motion } from 'framer-motion'
import React from 'react'

interface IAuthor {
  name: string
  job: string
  img: string
}

interface IContent {
  id: number
  title: string
  text: string
  author: IAuthor
}

interface IProps {
  i: number
  content: IContent
}


export default function ReviewsItem({content, i}: IProps) {

  const windowWidth = window.innerWidth

  return (
    <motion.div className="reviews__item"
      initial={{
        opacity: 0,
        x: windowWidth <= 1340 ? '0' : (i + 1) % 2 === 0 ? '20%' : '-20%',
        y: windowWidth <= 1340 ? 50 : 0
      }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, type: 'spring', bounce: 0.2 }}
    >
      <blockquote className='reviews__quote'>
        <b>{content.title}</b>
        <p>{content.text}</p>
      </blockquote>
      <div className="reviews__author">
        <div className="reviews__author__avatar">
          <img src={content.author.img} alt="" />
        </div>
        <div>
          <p>{content.author.name}</p>
          <p>{content.author.job}</p>
        </div>
      </div>
    </motion.div>
  )
}
