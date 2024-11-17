import { motion } from "framer-motion";

const InteractiveGesture = () => {
  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        backgroundColor: "purple",
      }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8, rotate: 45 }}
      drag
      dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
    />
  );
};

export default InteractiveGesture;
