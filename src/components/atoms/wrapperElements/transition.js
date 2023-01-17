import { useRef } from "react";
import Box from "@mui/material/Box";
import { motion, useInView } from "framer-motion";

/*
Fuer mehr Transitions siehe: https://www.framer.com/motion/transition/
Fuer mehr cubic-bezier siehe: https://cubic-bezier.com/#.17,.67,1,.28

*/

export default function Transition({ children, xTransition, yTransition }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  //   useEffect(() => {
  //     console.log("Element is in view: ", isInView)
  //   }, [isInView])

  const YTransition =
    {
      fromBottom: 100,
      fromTop: -100,
    }[yTransition] ?? 0;

  const XTransition =
    {
      fromLeft: -100,
      fromRight: 100,
    }[xTransition] ?? 0;

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0, x: 0 },
    hidden: {
      opacity: 0,
      //scale: 0.65,
      y: YTransition,
      x: XTransition,
    },
  };

  return (
    <>
      <Box
        component={motion.div}
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{
          duration: 1.5,
          ease: [0.17, 0.55, 0.55, 1],
        }}
        ref={ref}
      >
        {children}
      </Box>
    </>
  );
}
