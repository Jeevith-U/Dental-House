import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const RevealOnScroll = ({ children }) => {
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0 });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      if (scrollDirection === "down") {
        controls.start({ opacity: 0, y: 50 });
      } else if (scrollDirection === "up") {
        controls.start({ opacity: 0, y: -50 });
      }
    }
  }, [controls, inView, scrollDirection]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="bg-transparent overflow-visible"
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
