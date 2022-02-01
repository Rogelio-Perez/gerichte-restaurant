import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { images } from "../../constants"
import "./AboutUs.css"

const AboutUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })
  const left = useAnimation()
  const right = useAnimation()

  useEffect(
    () => {
      if (inView) {
        left.start({
          x: 0,
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        })

        right.start({
          x: 0,
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        })
      }
      if (!inView) {
        left.start({
          x: -100,
          opacity: 0,
        })
        right.start({
          x: 100,
          opacity: 0,
        })
      }
    },
    [inView]
  )

  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>

      <motion.div className="app__aboutus-content flex__center" ref={ref}>
        <motion.div className="app__aboutus-content_about" animate={left}>
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            pariatur at nihil sunt harum a, molestias culpa commodi amet magnam
            totam tempora tempore tenetur corporis provident temporibus aperiam
            fugiat esse.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </motion.div>

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="about_knife" />
        </div>

        <motion.div className="app__aboutus-content_history" animate={right}>
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            pariatur at nihil sunt harum a, molestias culpa commodi amet magnam
            totam tempora tempore tenetur corporis provident temporibus aperiam
            fugiat esse.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AboutUs
