import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { fadeVariants } from '../../variants/fadeVariants'

interface IContent {
  id: number
  img: string
  name: string
  job: string
}

interface IProps {
  i: number
  content: IContent
}

export default function AboutTeam({ content, i }: IProps) {

  const [isHovered, setIsHovered] = useState(false)
  const windowWidth = window.innerWidth

  return (
    <motion.div
      className='about__team__item'
      variants={fadeVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: i % 2 === 0 ? 0.3 : 0.35 }}
    >
      <motion.img
        src={content.img}
        alt="member"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ filter: windowWidth < 1024 ? 'brightness(1)' : 'brightness(0.4)' }}
        whileHover={{ filter: 'brightness(1)', cursor: 'pointer' }}
      />
      <AnimatePresence>
        {isHovered &&
          <motion.div
            className='about__team__info'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, type: 'spring' }}
          >
            {content.name}, <span>{content.job}</span>
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>
  )
}
