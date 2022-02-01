import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { SubHeading, MenuItem } from "../../components"
import { images, data } from "../../constants"
import "./SpecialMenu.css"

const SpecialMenu = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  const left = useAnimation()
  const right = useAnimation()
  const image = useAnimation()

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

        image.start({
          opacity: 0,
        })
      }

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

        image.start({
          opacity: 1,
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        })
      }
    },
    [inView]
  )

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <motion.div className="app__specialMenu-menu" ref={ref}>
        <motion.div
          className="app__specialMenu-menu_wine flex__center"
          animate={left}
        >
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </motion.div>

        <motion.div className="app__specialMenu-menu_img" animate={image}>
          <img src={images.menu} alt="menu img" />
        </motion.div>

        <motion.div
          className="app__specialMenu-menu_cocktails flex__center"
          animate={right}
        >
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div style={{ marginTop: "25px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  )
}
export default SpecialMenu
