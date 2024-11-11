import { useEffect, useRef, useState } from "react";
import anime from "animejs";

const AnimatedGraphics = () => {
  const swirlRef = useRef(null);
  const arrowRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const createAnimation = (className, duration, delayMultiplier) => {
      return anime
        .timeline({
          easing: "easeInOutSine",
          autoplay: false,
        })
        .add({
          targets: className,
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: duration,
          delay: (el, i) => i * delayMultiplier,
        });
    };

    const createReverseAnimation = (className, duration, delayMultiplier) => {
      return anime
        .timeline({
          easing: "easeInOutSine",
          autoplay: false,
        })
        .add({
          targets: className,
          strokeDashoffset: [0, anime.setDashoffset],
          duration: duration,
          delay: (el, i) => i * delayMultiplier,
        });
    };

    const forwardSwirlAnimation = createAnimation(".swirl-path", 3000, 250);
    const forwardArrowAnimation = createAnimation(".arrow-path", 2000, 200);
    const reverseSwirlAnimation = createReverseAnimation(
      ".swirl-path",
      3000,
      250
    );
    const reverseArrowAnimation = createReverseAnimation(
      ".arrow-path",
      2000,
      200
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            forwardSwirlAnimation.play();
            forwardArrowAnimation.play();
            setHasAnimated(true);
          } else if (entry.isIntersecting && hasAnimated) {
            if (scrollDirection === "up") {
              reverseSwirlAnimation.play();
              reverseArrowAnimation.play();
            } else {
              forwardSwirlAnimation.play();
              forwardArrowAnimation.play();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (swirlRef.current) observer.observe(swirlRef.current);

    return () => {
      if (swirlRef.current) observer.unobserve(swirlRef.current);
    };
  }, [hasAnimated, scrollDirection]);

  return (
    <div
      className="graphics-wrapper relative w-full min-h-[200px] max-w-[100vw] overflow-hidden px-0"
      ref={swirlRef}
    >
      <div
        className="arrow absolute"
        aria-hidden="true"
        ref={arrowRef}
        style={{
          width: "min(40rem, 80vw)",
          height: "auto",
          bottom: "clamp(-10px, -1vw, -5px)",
          left: "clamp(1rem, 40vw, 45rem)",
          transform: "rotate(clamp(10deg, 15deg, 20deg))",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 50"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%", // Ensure the width fills the container
            height: "100%", // Ensure the height fills the container
          }}
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
      <div
        className="swirl absolute"
        aria-hidden="true"
        style={{
          width: "10rem", // Make the swirl container fill the width
          height: "100%", // Make the swirl container fill the height
          left: "clamp(1rem, 32vw, 55rem)",
          top: "clamp(5px, 2vw, 15px)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 40"
          className="w-full h-full" // Make the swirl SVG stretch to fit
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%", // Ensure the width fills the container
            height: "100%", // Ensure the height fills the container
          }}
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
