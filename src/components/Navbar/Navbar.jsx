import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { motion } from 'framer-motion'

import images from '../../constants/images'
import './Navbar.css'

const navVariants = {
  hidden: {},
  show: {}
}

const logoVariants = {
  hidden: {
    x: -100,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeIn', duration: 1
    }
  }
}

const liVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
  }
}

const loginVariants = {
  hidden: {
    x: 100,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeIn', duration: 1
    }
  }
}

const Navbar = () => { 
  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <motion.nav className='app__navbar'
      variants={navVariants}
      initial='hidden'
      animate='show'
    >
      <motion.div className='app__navbar-logo'
        variants={logoVariants}
      >
        <img src={images.gericht} alt="app logo" />
      </motion.div>

      <ul className='app__navbar-links'>
        <motion.li className='p__opensans'
          variants={liVariants}
          initial='hidden'
          animate='show'
          transition={{ delay: 1, ease: 'easeIn' }}
        ><a href="#home">Home</a></motion.li>
        <motion.li className='p__opensans'
          variants={liVariants}
          initial='hidden'
          animate='show'
          transition={{ delay: 1.5 }}
        ><a href="#about">About</a></motion.li>
        <motion.li className='p__opensans'
          variants={liVariants}
          initial='hidden'
          animate='show'
          transition={{ delay: 2 }}
        ><a href="#menu">Menu</a></motion.li>
        <motion.li className='p__opensans'
          variants={liVariants}
          initial='hidden'
          animate='show'
          transition={{ delay: 2.5 }}
        ><a href="#awards">Awards</a></motion.li>
        <motion.li className='p__opensans'
          variants={liVariants}
          initial='hidden'
          animate='show'
          transition={{ delay: 3 }}
        ><a href="#contact">Contact</a></motion.li>
      </ul>

      <motion.div className='app__navbar-login'
        variants={loginVariants}
      >
        <a href="#login" className='p__opensans'>Log In  / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
      </motion.div>
      
      <motion.div className='app__navbar-smallscreen'
        variants={loginVariants}
      >
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">About</a></li>
              <li className='p__opensans'><a href="#menu">Menu</a></li>
              <li className='p__opensans'><a href="#awards">Awards</a></li>
              <li className='p__opensans'><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}

      </motion.div>
    </motion.nav>
  )
}

export default Navbar
