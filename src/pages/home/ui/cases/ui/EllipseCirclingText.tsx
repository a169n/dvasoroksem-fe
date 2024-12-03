import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const EllipseCirclingText = ({ text, isMobile }) => {
  const controls = useAnimation();
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [ellipsePosition, setEllipsePosition] = useState({ top: 0, left: 0 });
  const [ellipseSize, setEllipseSize] = useState({ width: 0, height: 0 });

  // Function to animate the paths
  const animatePaths = async () => {
    await controls.start({
      pathLength: 1,
      transition: {
        duration: 2, // Duration of animation
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse", // Reverse the animation on repeat
      },
    });
  };

  // Update position and size of ellipse based on text dimensions
  useEffect(() => {
    const updateEllipse = () => {
      if (textRef.current) {
        // Get the bounding rect of the text
        const rect = textRef.current.getBoundingClientRect();

        // Set ellipse size proportional to the text size
        const size = Math.max(rect.width, rect.height) * 4;

        // Update the position and size of ellipse
        setEllipsePosition({
          top: rect.top + window.scrollY - size / 4 - 150,
          left: rect.left + window.scrollX - size / 4 - 90,
        });
        setEllipseSize({ width: size, height: size });
      }
    };

    updateEllipse();
    window.addEventListener("resize", updateEllipse);

    return () => window.removeEventListener("resize", updateEllipse);
  }, [textRef]);

  // Start animation on component mount
  useEffect(() => {
    animatePaths();
  }, []);

  return (
    <div className="relative inline-block">
      {/* Text centered inside the animation */}
      <span ref={textRef} style={{ zIndex: 1 }}>
        {text}
      </span>

      {/* Custom SVG with animated paths */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        className="absolute pointer-events-none z-10"
        width={ellipseSize.width}
        height={ellipseSize.height}
        style={{
          top: !isMobile ? ellipsePosition.top - 20 : ellipsePosition.top,
          left: !isMobile ? ellipsePosition.left - 20 : ellipsePosition.left - 10,
        }}
        animate={controls}
      >
        <g
          fill="none"
          stroke="yellow"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        >
          {/* First Path */}
          <motion.path
            d="M105 10C28-4-29 20 34 28c62 8 91-14 66-14"
            initial={{ pathLength: 0 }}
            animate={controls}
          />

          {/* Second Path */}
          <motion.path
            d="M109 16C82-10-56 11 30 27s105-13 75-22"
            initial={{ pathLength: 0 }}
            animate={controls}
          />
        </g>
      </motion.svg>
    </div>
  );
};
