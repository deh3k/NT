import { motion } from 'framer-motion'
import React from 'react'
import bg from '../../img/bg.jpg'
import Contacts from '../Common/Contacts'
import Header from '../Header/Header'
import './Main.scss'

export default function Main() {
  return (
    <div className='main'>
      <img className='main__bg' src={bg} alt="" />
      <div className="container">
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className='main__title'>
            <div>
              <h1 className='main__h'>Night Trips</h1>
              <h6 className='main__subh'>WE GOT TRIPS FOR THE TRIPPSTER IN YOU</h6>
              <p className='main__p'>
                Neque, eros commodo, nascetur ullamcorper vitae.
                Tincidunt ut venenatis, volutpat lorem ut faucibus mauris, quisque.
                Integer gravida sed quis congue. Vel risus, arcu a viverra leo id pulvinar ultricies.
                Enim in in in pulvinar nulla sollicitudin. Ullamcorper.
              </p>
            </div>
          </div>
          <div className='main__contacts'>
            <Contacts margin='0 0 23px 0' />
          </div>
        </motion.div>
      </div>
      <div className="main__rentagle"></div>
    </div>

  )
}
