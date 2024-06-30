import React from "react";
import { motion } from "framer-motion";

const AppearOnScroll = ({ children }) => {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9}}
      whileInView={{opacity: 1, scale: 1}}
      transition={{ duration: 0.3 }}
      className="bg-transparent overflow-visible"
    >
      {children}
    </motion.div>
  );
};

export default AppearOnScroll;
