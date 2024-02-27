import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          Aakash Jadhav
        </motion.span>
      </div>
    </div>
  )
}

export default Navbar
