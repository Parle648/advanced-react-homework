import { motion } from "framer-motion"
import { useState } from "react"

const ControlledAnimation = () => {
  const [state, setState] = useState("small")

  const variants = {
    small: { scale: 1, x: 0 },
    medium: { scale: 1.5, x: 100 },
    large: { scale: 2, x: 200 },
  }

  return (
    <div>
      <motion.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: "red",
        }}
        animate={state}
        variants={variants}
        transition={{ duration: 0.5 }}
      />
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setState("small")}>Small</button>
        <button onClick={() => setState("medium")}>Medium</button>
        <button onClick={() => setState("large")}>Large</button>
      </div>
    </div>
  )
}

export default ControlledAnimation
