import { motion } from 'framer-motion'
import React from 'react'
import './Menu.scss'

const backDrop = {
  hidden: {
    y: '100vh',
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.7,
      type: 'tween',
    }
  },
  exit: {
    y: '-100vh',
    transition: {
      duration: 0.7,
      type: 'tween',
    }
  }
}

const links = ['Home', 'About', 'Trips', 'Contact']

interface IProps {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu(props: IProps) {
  return (
    <motion.div
      className='menu__wrapper'
      variants={backDrop}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container">
        <div className='menu'>
          {links.map((link, i) =>
            <motion.a
              key={i}
              href="#"
              animate={{ color: i === 0 ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.7)' }}
              whileHover={{ color: 'rgba(255, 255, 255, 1)' }}
              transition={{ duration: 0.3 }}
            >
              {link}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
