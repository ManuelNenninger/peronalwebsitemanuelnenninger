import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  prefersReducedMotion,
} from "framer-motion";

export default function ParallaxNew({ children, offset = 50 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const ySpring = useSpring(scrollYProgress, { stiffness: 800, damping: 90 });
  const y = useTransform(ySpring, [0, 1], [-offset, offset]);
  //const y = useParallax(ySpring, offset);
  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <>
      <motion.div ref={ref} style={{ y }}>
        {children}
      </motion.div>
    </>
  );
}
