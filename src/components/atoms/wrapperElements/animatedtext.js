//AnimatedTitle.js
//https://www.josephcollicoat.com/articles/animating-text-with-the-intersection-observer-api-and-framer-motion
import { useEffect, useRef } from "react";
import { useAnimation, motion, useInView } from "framer-motion";
import Typography from "@mui/material/Typography";

export default function AnimatedText({ children }) {
  const text = children ? children[0] : "Animated Demo Text";
  /*
   * Sanity gibt als children ein Array weiter.
   * Ein Satz ist ein String an der ersten Stelle des Arrays.
   * Bei einem Zeilenumbruch wird eine Zweite AnimatedText-Componente gerendert.
   * Das Children ist wieder ein Array und besitzt den Text der 2. Zeile.
   * D.h die 2. Zeile wird synchron animiert mit der 1. Zeile
   */

  const ctrls = useAnimation();

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  /*
  Once we split the text into character spans, 
  the browser will lose track of the fact that each character actually makes up a word. 
  We want the copy to be computer-readable and accessible as well, 
  so we’ll set the aria-label on the Title component with the role "heading", 
  and then we’ll hide each individual Character from the browser 
  & screen readers using aria-hidden="true".
  */

  return (
    <span
      aria-label={text}
      //role="heading"
    >
      {text.split(" ").map((word, index) => {
        return (
          <Typography
            sx={{
              display: "inline-block",
              marginRight: "0.25em",
              whiteSpace: "nowrap",
            }}
            variant="span"
            component={motion.span}
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            //0.05 here tells each letter to delay it’s animation start by 0.05 seconds, providing a nice reveal animation on each word.
            //This property is how we tell each word to start slightly after the previous one. Using index * 0.25 the first word will animate immediately, and each subsequent word will start after an additional 0.25 seconds.
            transition={{
              //   delayChildren: index * 0.25,
              //   staggerChildren: 0.05,
              delayChildren: index * 0.15,
              staggerChildren: 0.03,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <Typography
                  sx={{ display: "inline-block", marginRight: "-0.05em" }}
                  variant="span"
                  component={motion.span}
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                >
                  {character}
                </Typography>
              );
            })}
          </Typography>
        );
      })}
    </span>
  );
}
