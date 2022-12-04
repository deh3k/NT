import { motion } from 'framer-motion'
import React from 'react'
import './BurgerMenu.scss'

interface IProps {
  isOpen: boolean
}

const topLineVariants = {
  open: {
    rotate: -135,
    y: -12,
    transition: {
      type: 'spring',
      duration: 0.6,
    }
  },
  close: {
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 0.6,
    }
  }
}

const midLineVariants = {
  open: {
    opacity: 0,
    transition: {
      type: 'spring',
      duration: 0.6,
    }
  },
  close: {
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 0.6,
    }
  }
}

const botLineVariants = {
  open: {
    rotate: 135 ,
    y: 12,
    x: 0,
    transition: {
      type: 'spring',
      duration: 0.6,
    }
  },
  close: {
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 0.6,
    }
  }
}

export default function BurgerMenu(props: IProps) {
  return (
    <div className="burger-menu">
      <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={topLineVariants}
          animate={props.isOpen ? 'open' : 'close'}
          d="M2 26H34"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round" />
        <motion.path
          variants={midLineVariants}
          animate={props.isOpen ? 'open' : 'close'}
          d="M2 14H34"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round" />
        <motion.path
          variants={botLineVariants}
          animate={props.isOpen ? 'open' : 'close'}
          d="M2 2H34"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round" />
      </svg>
    </div>
  )
}
