import React, { useEffect, useRef, useState } from "react";

//https://bobbyhadz.com/blog/react-check-if-element-in-viewport
//https://github.com/vercel/next.js/issues/9805
export default function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
      if (!ref.current) return

      let observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
      } else {
        return;
      }
      //setIsIntersecting(entry.isIntersecting);
    })
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref]);

    return isIntersecting;
  }
