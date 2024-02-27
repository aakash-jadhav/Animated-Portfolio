import "./hero.scss"
import { motion } from "framer-motion"
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
}
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
}
const pathVariants = {
  hidden: {
    rotate: -360,
    x: "-50vw",
  },
  visible: {
    rotate: 0,
    x: 0,
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2
            drag
            dragConstraints={{ left: 20, right: 20, top: 20, bottom: 20 }}
            variants={textVariants}
          >
            Aakash Jadhav
          </motion.h2>
          <motion.h1 variants={textVariants}>Front End Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a
              variants={textVariants}
              download="/Aakash-Ujwal-Jadahv.pdf"
              href=""
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              Download CV
            </motion.a>
            <motion.a
              variants={textVariants}
              href="#Contact"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>

      <motion.div
        className="imageContainer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 3 } }}
      >
        <motion.svg
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          viewBox="0 0 64 64"
          data-name="Layer 1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          drag
          dragConstraints={{ left: 10, right: 10, top: 10, bottom: 10 }}
        >
          <defs>
            <style>
              {`
                .cls-1 {
                  fill: #f5dd90;
                }

                .cls-2 {
                  fill: #f76c5e;
                }

                .cls-3 {
                  fill: #6096ba;
                }

                .cls-4 {
                  fill: #274c77;
                }
              `}
            </style>
          </defs>
          <motion.path
            className="cls-4"
            d="M46.2,32c0-.9,.3-1.72,.8-2.4-.36-2.14-1.2-4.11-2.4-5.81-.83-.13-1.63-.49-2.26-1.13s-1.01-1.44-1.13-2.26c-1.7-1.2-3.67-2.04-5.81-2.4-.67,.5-1.5,.8-2.4,.8s-1.72-.3-2.4-.8c-2.14,.36-4.11,1.2-5.81,2.4-.13,.83-.49,1.63-1.13,2.26s-1.44,1.01-2.26,1.13c-1.2,1.7-2.04,3.67-2.4,5.81,.5,.67,.8,1.5,.8,2.4s-.3,1.72-.8,2.4c.36,2.14,1.2,4.11,2.4,5.81,.83,.13,1.63,.49,2.26,1.13,.64,.64,1.01,1.44,1.13,2.26,1.7,1.2,3.67,2.04,5.81,2.4,.67-.5,1.5-.8,2.4-.8s1.72,.3,2.4,.8c2.14-.36,4.11-1.2,5.81-2.4,.13-.83,.49-1.63,1.13-2.26,.64-.64,1.44-1.01,2.26-1.13,1.2-1.7,2.04-3.67,2.4-5.81-.5-.67-.8-1.5-.8-2.4Z"
          />
          <circle className="cls-1" cx="33" cy="32" r="9" />
          <path
            className="cls-3"
            d="M7,32c0-14.36,11.64-26,26-26v4c-12.15,0-22,9.85-22,22"
          />
          <polygon className="cls-2" points="9 38 5 32 13 32 9 38" />
          <path
            className="cls-3"
            d="M46,54.51c-12.44,7.18-28.34,2.92-35.52-9.52l3.46-2c6.08,10.52,19.53,14.13,30.05,8.05"
          />
          <polygon
            className="cls-2"
            points="50.19 49.78 47 56.25 43 49.32 50.19 49.78"
          />
          <path
            className="cls-3"
            d="M46,9.48c12.44,7.18,16.7,23.08,9.52,35.52l-3.46-2c6.08-10.52,2.47-23.98-8.05-30.05"
          />
          <polygon
            className="cls-2"
            points="39.8 8.21 47 7.75 43 14.68 39.8 8.21"
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Hero
