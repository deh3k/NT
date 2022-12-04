import { motion } from 'framer-motion'
import React from 'react'
import { fadeVariants } from '../../variants/fadeVariants'
import Contacts from '../Common/Contacts'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className='footer'>
      <motion.div className="container"
        variants={fadeVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="footer__cont">
          <div className='footer__links'>
            <h6>ABOUT</h6>
            <ul>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Copyrights</a></li>
            </ul>
          </div>
          <div className='footer__links'>
            <h6>FAQ</h6>
            <ul>
              <li><a href="#">Rules</a></li>
              <li><a href="#">Tickets</a></li>
              <li><a href="#">Editions</a></li>
              <li><a href="#">Contribute</a></li>
            </ul>
          </div>
          <div className='footer__links'>
            <h6>Events</h6>
            <ul>
              <li><a href="#">Star Gazing</a></li>
              <li><a href="#">Desert Mania</a></li>
              <li><a href="#">Dunes Madness</a></li>
              <li><a href="#">Spooky Land</a></li>
            </ul>
          </div>
          <div className='footer__links'>
            <h6>Contact us</h6>
            <ul>
              <li>hello@example.com</li>
              <li>(405) 555-0128</li>
              <li>(252) 555-0126</li>
            </ul>
          </div>
          <div className='footer__links footer__soc'>
            <h6>Follow us</h6>
            <div>
              <Contacts margin='0 20px 0 0' />
            </div>
          </div>
        </div>
        <div className="footer__rights">
          Copyright © Night Trips 2019. All rights reserved.
        </div>
        <div className="footer__logo">
          NT<span>.</span>
        </div>
      </motion.div>
    </footer>
  )
}
