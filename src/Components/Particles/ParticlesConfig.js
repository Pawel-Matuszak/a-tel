import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import "./particlesStyle.css";

const ParticlesConfig = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [enableHover, setEnableHover] = useState(true);

  let timer;
  const checkSize = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setSize(window.innerWidth);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    if (size < 640) {
      setEnableHover(false);
    } else {
      setEnableHover(true);
    }
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, [size]);

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 0.03 * size,
            density: {
              enable: false,
              value_area: 800,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#362cff",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: true,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 350,
            color: "#ffffff",
            opacity: 0.4,
            width: 0.2,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: {
              enable: enableHover,
              mode: "grab",
            },
            onresize: {
              enable: true,
              density_auto: true,
              density_area: 400,
            },
            onclick: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 350,
              line_linked: {
                opacity: 2,
              },
            },
            bubble: {
              distance: 250,
              size: 4,
              duration: 2,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticlesConfig;
