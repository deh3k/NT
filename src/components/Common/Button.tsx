import { motion } from 'framer-motion'
import React from 'react'

interface IProps {
  children: React.ReactNode | React.ReactNode[]
}

export default function Button(props: IProps) {
  return (
    <motion.button
      className='btn'
      whileHover={{
        scale: 1.05
      }}
    >
      {props.children}
    </motion.button>
  )
}
