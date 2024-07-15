import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
  {
    id: 1,
    title: "Workout Tracker",
    img: "/workout.png",
    desc: "A web application created using the MERN stack allows users to create, track, and manage their work out details. It features a user-friendly interface for workout creation, a database for storing workout data.",
    demo: "https://workout-exercise.netlify.app/",
  },
  {
    id: 2,
    title: "Invoice Generator",
    img: "/invoice.png",
    desc: "Ditch spreadsheets, embrace beauty! This invoice generator lets you create, edit, and track payments with ease. Built with Material Design and Firebase, it's the streamlined invoicing solution you've been waiting for.",
    demo: "https://invoice-a2e0c.web.app/",
  },
  {
    id: 3,
    title: "Inventory Management",
    img: "/inventory.png",
    desc: "Bootstrap's clean design meets Firebase's power. Take control of your inventory. Effortless adding, searching, and deleting. Streamline your stock, empower your business.",
    demo: "https://electrify-dab2d.web.app/",
  },
  {
    id: 4,
    title: "Password Generator",
    img: "/passwordGenerator.png",
    desc: "Boost your online security with this React password generator. It creates custom, strong passwords (6-20 characters) with your desired complexity (symbols, numbers) and lets you copy them with a single click.",
    demo: "https://ciphercompiler.netlify.app/",
  },
  {
    id: 5,
    title: "Tic Tac Toe",
    img: "/tic-tac.png",
    desc: "Challenge a friend to an engaging Tic Tac Toe game built with HTML, CSS, and JavaScript! Enjoy classic gameplay with a modern twist, as you take turns strategically placing your X's and O's on the interactive board. Intuitive design and smooth functionality make this a fun and portable solution for your next game night.",
    demo: "https://game-tic-tactoe.netlify.app/",
  },
  {
    id: 6,
    title: "Meme Generator",
    img: "/mDev.png",
    desc: "Make memes, share laughs! Add captions to popular meme images, explore a library of hilarious options, and spread the fun online.",
    demo: "https://meme-developer.netlify.app/",
  },
]

const Single = ({ item }) => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(item.demo, "_blank")}
            >
              See Demo
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Portfolio
