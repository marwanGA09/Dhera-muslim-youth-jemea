'use client';

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`,
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`,
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`

interface ParticlesComponentProps {
  id: string;
}

const ParticlesComponent = (props: ParticlesComponentProps) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // await loadAll(engine);
      // await loadFull(engine); // if you are going to use `loadFull`
      await loadSlim(engine); // if you are going to use `loadSlim`
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => (
      
      
      
    //   {
    //   background: {
    //     color: {
    //       value: "#111111",
    //     },
    //   },
    //   fpsLimit: 60,
    //   interactivity: {
    //     events: {
    //       onHover: {
    //         enable: true,
    //         mode: "grab",
    //       },
    //       resize: true,
    //     },
    //     modes: {
    //       push: {
    //         quantity: 4,
    //       },
    //       grab: {
    //         distance: 200,
    //         links: {
    //           opacity: 0.5,
    //         },
    //       },
    //     },
    //   },
    //   particles: {
    //     color: {
    //       value: "#00A8FF",
    //     },
    //     links: {
    //       color: "#00A8FF",
    //       distance: 150,
    //       enable: true,
    //       opacity: 0.2,
    //       width: 1,
    //     },
    //     move: {
    //       direction: "none",
    //       enable: true,
    //       outModes: {
    //         default: "out",
    //       },
    //       random: false,
    //       speed: 1,
    //       straight: false,
    //     },
    //     number: {
    //       density: {
    //         enable: true,
    //       },
    //       value: 80,
    //     },
    //     opacity: {
    //       value: 0.2,
    //     },
    //     shape: {
    //       type: "polygon",
    //       polygon: {
    //         sides: 6,
    //       },
    //     },
    //     size: {
    //       value: { min: 5, max: 10 },
    //     },
    //   },
    //   detectRetina: true,
    // }
  
  {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 0,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "bubble"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
  



  
  ),
    [],
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
