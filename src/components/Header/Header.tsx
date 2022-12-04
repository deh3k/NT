import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import BurgerMenu from '../Common/BurgerMenu/BurgerMenu'
import Menu from '../Menu/Menu'
import './Header.scss'

export default function Header() {

  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [isDisable, setIsDisable] = useState<boolean>(false)

  const viewVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: 'spring'
      }
    }
  }

  const clickHandler = () => {
    setShowMenu(!showMenu)
    setIsDisable(true)
    setTimeout(() => {
      setIsDisable(false)
    }, 800)
  }

  return (
    <>
      <motion.header
        className="header container"
        variants={viewVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <div className='header__logo'>
          NT<span>.</span>
        </div>
        <button
          disabled={isDisable}
          onClick={clickHandler}
          className="header__btn"
        >
          <BurgerMenu isOpen={showMenu} />
        </button>
      </motion.header>
      <AnimatePresence exitBeforeEnter>
        {showMenu && <Menu setShowMenu={setShowMenu} />}
      </AnimatePresence>
    </>

  )
}
