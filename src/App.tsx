import { motion } from 'framer-motion';
import React from 'react';
import './App.scss';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Reviews from './components/Reviews/Reviews';
import Trips from './components/Trips/Trips';

function App() {
  return (
    <>
      <Main />
      <div className='cont'>
        <Trips />
        <About />
        <Reviews />
        <motion.div className="container"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="title__wrapper-2">
            <h2 className="title">See you soon!</h2>
            <h6>We hope to meet each other <br /> very soon.</h6>
          </div>
        </motion.div>
        <Footer />
      </div>
    </>
  );
}

export default App;
