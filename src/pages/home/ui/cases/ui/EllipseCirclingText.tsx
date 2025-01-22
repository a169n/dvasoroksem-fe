import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export const EllipseCirclingText = ({ text, isMobile }) => {
  const controls = useAnimation();
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [ellipsePosition, setEllipsePosition] = useState({ top: 0, left: 0 });
  const [ellipseSize, setEllipseSize] = useState({ width: 0, height: 0 });

  const animatePaths = async () => {
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
    const updateEllipse = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();

        const size = Math.max(rect.width, rect.height) * 5.4;

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

  useEffect(() => {
    animatePaths();
  }, []);

  return (
    <div className="relative inline-block">
      <span ref={textRef} style={{ zIndex: 1 }}>
        {text}
      </span>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        className="absolute pointer-events-none z-10"
        width={ellipseSize.width}
        height={ellipseSize.height}
        style={{
          top: !isMobile ? ellipsePosition.top - 20 : ellipsePosition.top,
          left: !isMobile
            ? ellipsePosition.left - 20
            : ellipsePosition.left - 10,
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
