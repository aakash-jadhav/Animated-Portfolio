import React from "react"
import { motion } from "framer-motion"
import "./skills.scss"
import Rocket from "./Rocket"
import SkillList from "./SkillList"
function Skills() {
  return (
    <div className="skills" id="skills">
      <motion.h1
        className="skills__title"
        initial={{ opacity: 0, y: -200 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 },
        }}
        whileHover={{ letterSpacing: "2px" }}
      >
        Skills
      </motion.h1>
      <div className="skills__container">
        <SkillList />
        <Rocket />
      </div>
    </div>
  )
}

export default Skills
