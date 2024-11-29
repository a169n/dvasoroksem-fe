import { useEffect, useRef } from "react";
import anime from "animejs";
import { useTheme, useMediaQuery } from "@mui/material";

const AnimatedGraphics = () => {
  const theme = useTheme();
  const isXsToSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const isSmToMd = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMdToLg = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLgToXl = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXlUp = useMediaQuery(theme.breakpoints.up("xl"));

  const swirlRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const animateGraphics = () => {
      anime
        .timeline({ loop: true })
        .add({
          targets: ".swirl-path",
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInOutSine",
          duration: 1000,
          delay: (i) => i * 250,
        })
        .add({
          targets: ".arrow-path",
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInOutSine",
          duration: 2000,
          delay: (i) => i * 200,
        })
        .add({
          targets: ".swirl-path, .arrow-path",
          strokeDashoffset: [0, anime.setDashoffset],
          easing: "easeInOutSine",
          duration: 1000,
          delay: (i) => i * 250,
        });
    };

    if (swirlRef.current || arrowRef.current) {
      animateGraphics();
    }
  }, []);

  const getSwirlStyles = () => {
    if (isXsToSm) {
      return {
        width: "clamp(10rem, 30vw, 25rem)",
        height: "clamp(50px, 170%, 160px)",
        left: "clamp(1rem, 52vw, 40rem)",
        top: "clamp(5px, 1.5vw, 100px)",
      };
    }
    if (isSmToMd) {
      return {
        width: "clamp(16rem, 35vw, 20rem)",
        height: "clamp(70px, 90%, 350px)",
        left: "clamp(1rem, 20vw, 45rem)",
        top: "clamp(5px, 5vw, 300px)",
      };
    }
    if (isMdToLg) {
      return {
        width: "clamp(16rem, 33vw, 40rem)",
        height: "clamp(70px, 100%, 650px)",
        left: "clamp(1rem, 20vw, 55rem)",
        top: "clamp(5px, 3.5vw, 650px)",
      };
    }
    if (isLgToXl) {
      return {
        width: "clamp(18rem, 30vw, 45rem)",
        height: "clamp(80px, 150%, 700px)",
        left: "clamp(2rem, 24vw, 50rem)",
        top: "clamp(-50px, -2vw, 700px)",
      };
    }
    return {};
  };

  const getArrowStyles = () => {
    if (isMdToLg || isLgToXl) {
      return {
        width: "min(20rem, 80vw)",
        height: "100%",
        top: "70px",
        left: "clamp(1rem, 60vw, 200rem)",
        transform: "rotate(10deg)",
      };
    }
    return {};
  };

  return (
    <div
      className="graphics-wrapper relative w-full min-h-[200px] max-w-[100vw] overflow-hidden px-0"
      ref={swirlRef}
    >
      {(isMdToLg || isLgToXl || isXlUp) && (
        <div
          className="arrow absolute"
          aria-hidden="true"
          ref={arrowRef}
          style={getArrowStyles()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 250 90"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              fill="none"
              stroke="yellow"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            >
              <path
                d="M154 21c6-2 13-4 23 0-13-5-16-8-18-15"
                className="arrow-path"
              />
              <path
                d="M14 28c29-22 101-5 104 9 1 7-18 7 0-12s53-6 53-6"
                className="arrow-path"
              />
            </g>
          </svg>
        </div>
      )}
      <div
        className="swirl absolute"
        aria-hidden="true"
        style={getSwirlStyles()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 150"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            fill="none"
            stroke="yellow"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.5"
          >
            <path
              d="M105 10C28-4-29 20 34 28c62 8 91-14 66-14"
              className="swirl-path"
            />
            <path
              d="M109 16C82-10-56 11 30 27s105-13 75-22"
              className="swirl-path"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedGraphics;
