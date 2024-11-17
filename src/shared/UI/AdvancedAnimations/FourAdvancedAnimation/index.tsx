import { motion } from "framer-motion"

const DelayedSync = () => {
  const boxVariants = {
    initial: { x: 0 },
    animate: { x: 200 },
  }

  return (
    <div style={{ display: "flex", gap: 20 }}>
      <motion.div
        style={{ width: 50, height: 50, backgroundColor: "red" }}
        variants={boxVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 2, delay: 0 }}
      />
      <motion.div
        style={{ width: 50, height: 50, backgroundColor: "green" }}
        variants={boxVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.div
        style={{ width: 50, height: 50, backgroundColor: "blue" }}
        variants={boxVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 2, delay: 1 }}
      />
    </div>
  )
}

export default DelayedSync
