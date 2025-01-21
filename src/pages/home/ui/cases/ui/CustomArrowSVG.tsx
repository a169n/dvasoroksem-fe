import { useMediaQuery, useTheme } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export const CustomArrowSVG = () => {
  const controls = useAnimation();

  const theme = useTheme();
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));

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
      viewBox={isXlUp ? "0 0 250 100" : "0 0 250 65"}
      className="absolute"
      style={{
        bottom: "35px",
        right: "8%",
        transform: "translateY(-40%) rotate(25deg)",
        width: isXlUp ? "750px" : "550px",
        height: "120px",
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
