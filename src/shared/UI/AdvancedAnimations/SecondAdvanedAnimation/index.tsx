import { motion, useScroll, useTransform } from "framer-motion"

const Parallax = () => {
  const { scrollY } = useScroll()

  const y1 = useTransform(scrollY, [0, 500], [0, -100])
  const y2 = useTransform(scrollY, [0, 500], [0, -200])

  return (
    <div style={{ height: "150vh", position: "relative" }}>
      <motion.div
        style={{
          position: "absolute",
          top: 50,
          left: 50,
          width: 100,
          height: 100,
          backgroundColor: "blue",
          y: y1,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: 150,
          left: 150,
          width: 100,
          height: 100,
          backgroundColor: "green",
          y: y2,
        }}
      />
    </div>
  )
}

export default Parallax
