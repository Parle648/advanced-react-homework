import { motion } from "framer-motion"

const CurvedMotion = () => {
  return (
    <motion.div
      style={{
        width: 50,
        height: 50,
        borderRadius: "50%",
        backgroundColor: "red",
      }}
      animate={{
        x: [0, 100, 50, 200],
        y: [0, 50, 100, 0],
        backgroundColor: ["red", "green", "blue", "purple"],
        opacity: [1, 0.5, 1, 0.8],
        scale: [1, 1.5, 1, 0.8],
      }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        loop: Infinity,
      }}
    />
  )
}

export default CurvedMotion
