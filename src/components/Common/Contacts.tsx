import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

interface IProps {
  margin?: string
}

const pathVariants = {
  hidden: {
    opacity: 1,
    pathLength: 0,
  }
}

export default function Contact({ margin = '0 25px 0 0' }: IProps) {

  const rootRef = useRef<null | HTMLDivElement>(null)
  const isInView = useInView(rootRef, { once: true })

  return (
    <>
      <div ref={rootRef} className='contact' style={{ margin: margin }}>
        <a href="#">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate={{ pathLength: isInView ? 1 : 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z" stroke="#41EAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div className='contact' style={{ margin: margin }}>
        <a href="#">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_25)">
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate={{ pathLength: isInView ? 1 : 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#41EAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate={{ pathLength: isInView ? 1 : 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                d="M16 11.3701C16.1234 12.2023 15.9813 13.0523 15.5938 13.7991C15.2063 14.5459 14.5932 15.1515 13.8416 15.5297C13.0901 15.908 12.2385 16.0397 11.4078 15.906C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1903 8.22774 13.4229 8.09408 12.5923C7.96042 11.7616 8.09208 10.91 8.47034 10.1584C8.8486 9.40691 9.4542 8.7938 10.201 8.4063C10.9478 8.0188 11.7978 7.87665 12.63 8.00006C13.4789 8.12594 14.2649 8.52152 14.8717 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z" stroke="#41EAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_1_25">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </a>

      </div>
      <div className='contact' style={{ margin: margin }}>
        <a href="#">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              variants={pathVariants}
              initial="hidden"
              animate={{ pathLength: isInView ? 1 : 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#41EAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </>
  )
}
