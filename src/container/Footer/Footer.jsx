import React, { useEffect } from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { FooterOverlay, Newsletter  } from '../../components'
import { images } from '../../constants'
import './Footer.css'

const Footer = () => { 

  const {ref, inView} = useInView({
    threshold: 0.2
  })

  const footer = useAnimation()

  useEffect(() => {

    if(!inView) {
      footer.start({
        opacity: 0
      })
    }

    if (inView) {
      footer.start({
        opacity: 1,
        transition: {
          ease: 'easeInOut', delay: 1, duration: 3
        }
      })
    }


  }, [inView])

  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <motion.div className="app__footer-links" ref={ref} animate={footer}>
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p__opensans">+1 212-344-1230</p>
          <p className="p__opensans">+1 212-555-1230</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00 am - 11:00 pm</p>
        </div>
      </motion.div>

      <div className="footer__copyright">
        <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
      </div>

    </div>
  )
}
export default Footer
