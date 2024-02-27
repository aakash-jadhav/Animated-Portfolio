import React from "react"
import { motion } from "framer-motion"
import "./skills.scss"
function SkillList() {
  const skillVariant = {
    initial: {
      opacity: 0,
      x: -300,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 120,
      },
    },
  }
  const imgVariants = {
    default: { filter: "grayscale(100%)" },
    hover: { filter: "grayscale(0%)", scale: 1.2 },
  }
  const frontendSkills = [
    {
      name: "HTML",
      logo: "/tech/html.svg",
    },
    {
      name: "CSS",
      logo: "/tech/css.svg",
    },
    {
      name: "JavaScript",
      logo: "/tech/js.svg",
    },
    {
      name: "React",
      logo: "/tech/react.svg",
    },
    {
      name: "Redux",
      logo: "/tech/redux.svg",
    },
    {
      name: "Typescript",
      logo: "/tech/ts.svg",
    },
    {
      name: "Git",
      logo: "/tech/git.svg",
    },
    {
      name: "Github",
      logo: "/tech/github.svg",
    },
  ]
  return (
    <div className="list-container">
      <motion.ul
        className="skills-list"
        variants={skillVariant}
        initial="initial"
        whileInView="animate"
      >
        {frontendSkills.map((skill, i) => (
          <motion.li
            initial="default"
            whileHover="hover"
            whileDrag={{ rotate: 10 }}
            whileTap={{ scale: 1.1 }}
            drag
            key={i}
          >
            <motion.img
              src={skill.logo}
              className="svgLogo"
              variants={imgVariants}
            />
            {skill.name}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default SkillList
