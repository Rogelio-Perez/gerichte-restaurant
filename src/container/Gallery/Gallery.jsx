import React, { useRef, useEffect } from "react"
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { SubHeading } from "../../components"
import { images } from "../../constants"
import "./Gallery.css"

const Gallery = () => {
  const scrollRef = useRef(null)
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const left = useAnimation()
  const right = useAnimation()

  useEffect(
    () => {
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

      if (inView) {
        left.start({
          x: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 2,
          },
        })
        right.start({
          x: 0,
          opacity: 1,
          transition: {
            ease: "easeInOut",
            duration: 2,
          },
        })
      }
    },
    [inView]
  )

  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === "left") {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <motion.div className="app__gallery flex__center" ref={ref}>
      <motion.div className="app__gallery-content" animate={left}>
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </motion.div>
      <motion.div className="app__gallery-images" animate={right}>
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
export default Gallery
