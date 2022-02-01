import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import SubHeading from "../SubHeading/SubHeading"
import "./Newsletter.css"

const Newsletter = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const newsLetter = useAnimation()

  useEffect(
    () => {
      if (!inView) {
        newsLetter.start({
          x: -100,
          opacity: 0,
        })
      }

      if (inView) {
        newsLetter.start({
          x: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 3,
          },
        })
      }
    },
    [inView]
  )

  return (
    <motion.div className="app__newsletter" ref={ref} animate={newsLetter}>
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Suscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your e-mail address" />
        <button className="custom__button">Subscribe</button>
      </div>
    </motion.div>
  )
}
export default Newsletter
