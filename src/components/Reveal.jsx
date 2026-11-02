import { useEffect, useRef } from "react";
import { motion, useAnimationControls, useInView, useReducedMotion } from "framer-motion";

const transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export default function Reveal({ as = "div", delay = 0, children, ...props }) {
  const ref = useRef(null);
  const controls = useAnimationControls();
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [controls, isInView]);

  const revealForKeyboard = () => controls.start("visible");

  return (
    <MotionTag
      ref={ref}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? "visible" : controls}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { ...transition, delay } },
      }}
      onFocusCapture={revealForKeyboard}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
