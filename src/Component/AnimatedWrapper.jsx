import { motion } from "framer-motion";
import React from "react";


const containerVariant = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const animations = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },

  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },

  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },

  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },

  zoom: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};


// const childVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };


const AnimatedWrapper = ({
  children,
  once = true,
  className = "",
  IsStagger = false,
  animation= "slideUp",
}) => {
  const selectedVariant = animations[animation];
  if (IsStagger) {
    return (
      <motion.section
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        className={className}
      >
       {React.Children.map(children, (child) => (
          <motion.div variants={selectedVariant}>
            {child}
          </motion.div>
        ))}
      </motion.section>
    );
  }

  // Default fade-in for non-staggered usage
  return (
    <motion.div
      className={className}
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;


     

      // </motion.section>



      //  {Array.isArray(children) ? (
      //     children.map((child, index) => (
      //       <motion.div key={index} variants={childVariants}>
      //         {" "}
      //         {child}
      //       </motion.div>
      //     ))
      //   ) : (
      //     <motion.div variants={childVariants}>{children}</motion.div>
      //   )}