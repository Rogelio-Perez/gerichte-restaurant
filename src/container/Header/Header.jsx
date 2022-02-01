import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css'
import { useInView } from 'react-intersection-observer'

const headerVariants = {
  hidden: {},
  show: {}
}

const infoVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      delay: 3, duration: 2, ease: 'easeInOut'
    }
  }
}

const imgVariants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 3, duration: 2, ease: 'easeInOut'
    }
  }
}




const Header = () => {

  const { ref, inView } = useInView({
    threshold: 0.2
  })

  const info = useAnimation()
  const img = useAnimation()


  useEffect(() => {

    if(!inView) {
      info.start({
        opacity: 0
      })

      img.start({
        opacity: 0,
        y: 100
      })
    }

    if(inView) {
      info.start({
        opacity: 1,
        transition: {
          delay: 1, duration: 2, ease: 'easeInOut'
        }
      })

      img.start({
        y: 0,
        opacity: 1,
        transition: {
          delay: 1, duration: 2, ease: 'easeInOut'
        }
      })
    }


  }, [inView])
  
  return (
    <div className='app__header app__wrapper section__padding' id='home' ref={ref}>

      <motion.div className='app__wrapper_info'
        animate={info}
      >
        <SubHeading title="Chase the new flavour" />
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </motion.div>

      <motion.div className='app__wrapper_img'
        animate={img}
      >
        <img src={images.welcome} alt="header img" />
      </motion.div>
      
    </div>
  )
}
export default Header
