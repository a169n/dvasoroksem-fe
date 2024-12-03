import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const CustomArrowSVG = () => {
  const controls = useAnimation();

  const animateArrow = async () => {
    await controls.start({
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  };

  useEffect(() => {
    animateArrow();
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 65"
      className="absolute"
      style={{
        bottom: "0",
        right: "8%",
        transform: "translateY(-50%) rotate(10deg)",
        width: "550px",
        height: "90px",
      }}
    >
      <g
        fill="none"
        stroke="yellow"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      >
        <motion.path
          d="M154 21c6-2 13-4 23 0-13-5-16-8-18-15"
          className="arrow-path"
          initial={{ pathLength: 0 }}
          animate={controls}
        />
        <motion.path
          d="M14 28c29-22 101-5 104 9 1 7-18 7 0-12s53-6 53-6"
          className="arrow-path"
          initial={{ pathLength: 0 }}
          animate={controls}
        />
      </g>
    </svg>
  );
};
