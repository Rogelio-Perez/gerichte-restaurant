import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


import { SubHeading } from '../../components'
import { images } from '../../constants'

const FindUs = () => { 

  const { ref, inView } = useInView({
    threshold: 0.3
  })

  const top = useAnimation()
  const bottom = useAnimation()

  useEffect(() => {

    if(!inView) {
      top.start({
        y: 100,
        opacity: 0
      })

      bottom.start({
        y: -100,
        opacity: 0
      })
    }

    if(inView) {
      top.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1, ease: 'easeInOut'
        }
      })

      bottom.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1, ease: 'easeInOut'
        }
      })
    }

  }, [inView])


  return(
    <motion.div className='app__bg app__wrapper section__padding' id='contact' ref={ref}>
      <motion.div className='app__wrapper_info' animate={top}>
        <SubHeading title="Contact" />
        <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className='app__wrapper-content'>
          <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button className='custom__button' style={{ marginTop: '2rem' }}>Visit Us</button>
      </motion.div>

      <motion.div className='app__wrapper_img' animate={bottom}>
        <img src={images.findus} alt="findus" />
      </motion.div>
    </motion.div>
  )
}
export default FindUs
