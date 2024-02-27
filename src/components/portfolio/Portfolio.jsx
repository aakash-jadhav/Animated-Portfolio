import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
  {
    id: 1,
    title: "Workout Tracker",
    img: "https://images.pexels.com/photos/2729899/pexels-photo-2729899.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "A web application created using the MERN stack allows users to create, track, and manage their work out details. It features a user-friendly interface for workout creation, a database for storing workout data.",
    demo: "https://workout-exercise.netlify.app/",
  },
  {
    id: 2,
    title: "Password Generator",
    img: "https://images.pexels.com/photos/2882630/pexels-photo-2882630.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Boost your online security with this React password generator. It creates custom, strong passwords (6-20 characters) with your desired complexity (symbols, numbers) and lets you copy them with a single click.",
    demo: "https://ciphercompiler.netlify.app/",
  },
  {
    id: 3,
    title: "Tic Tac Toe",
    img: "https://images.pexels.com/photos/11986168/pexels-photo-11986168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Challenge a friend to an engaging Tic Tac Toe game built with HTML, CSS, and JavaScript! Enjoy classic gameplay with a modern twist, as you take turns strategically placing your X's and O's on the interactive board. Intuitive design and smooth functionality make this a fun and portable solution for your next game night.",
    demo: "https://game-tic-tactoe.netlify.app/",
  },
  {
    id: 4,
    title: "Meme Generator",
    img: "/meme.jpg",
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
