'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent = (props: ParticlesComponentProps) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      particles: {
        number: {
          value: 160,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            sides: 5,
          },
        },
        opacity: {
          value: 1,
          random: true,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          onClick: {
            enable: true,
            mode: "bubble",
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 400,
            links: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            quantity: 4,
          },
          remove: {
            quantity: 2,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id={props.id}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesComponent;
