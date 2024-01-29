import { gsap } from "gsap";
import { motion } from "framer-motion";

const Button = ({ styles }) => {
  return (
    <motion.button
      animate={{ y: 10, scale: 1 }}
      initial={{ y: -100, scale: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.9 }}
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Get Started
    </motion.button>
  );
};

export default Button;
