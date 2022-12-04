import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import Contacts from '../Contacts'
import './Share.scss'


export default function Share() {

  const rootRef = useRef<null | HTMLDivElement>(null)
  const isInView = useInView(rootRef, { once: true, amount: 1 })

  return (
    <motion.div className='share__wrapper'
      initial={{ y: '50' }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: 'spring' }}
    >
      <div className='share'>
        <p>Share it: </p>
        <div style={{ position: 'relative' }}>
          <div className='share__contacts'>
            <Contacts />
          </div>
          <div ref={rootRef} className='share__underline'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 40">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isInView ? 1 : 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                d="M179.706351,6.377435v30l-170-.000001"
                transform="translate(-4.706351-1.377435)"
                fill="none"
                stroke="#41ead4"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
