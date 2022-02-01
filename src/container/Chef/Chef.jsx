import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Chef.css'

const Chef = () => { 

  const { ref, inView } = useInView({
    threshold: 0.2
  })

  const left = useAnimation()
  const right = useAnimation()

  useEffect(() => {

    if(!inView) {
      left.start({
        opacity: 0,
        y: -100
      })

      right.start({
        opacity:0,
        y: 100
      })
    }

    if(inView) {
      left.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 2, ease: 'easeInOut'
        }
      })

      right.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 2, ease: 'easeInOut'
        }
      })
    }

  }, [inView])

  return (
    <motion.div className='app__bg app__wrapper section__padding' ref={ref}>
      <motion.div className='app__wrapper_img app__wrapper_img-reverse' animate={left}>
        <img src={images.chef} alt="chef" />
      </motion.div>

      <motion.div className='app__wrapper_info' animate={right}>
        <SubHeading title="Chef's Word"/>
        <h1 className='headtext__cormorant'>What we belive in</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, vitae eos!</p>
          </div>
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa enim sit, dolore autem dicta quibusdam eligendi optio nemo veniam ad, similique iure officia sed fugiat molestiae doloremque illum iusto!</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>

      </motion.div>
    </motion.div>
  )
}
export default Chef
