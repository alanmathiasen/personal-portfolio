import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
// import { loadFull } from 'tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';

const ParticlesContainer = ({ styles }: { styles: string | undefined }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's
    // the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadLinksPreset(engine);
    // await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className={styles}
      loaded={particlesLoaded}
      options={{
        preset: 'links',
        fullScreen: {
          enable: false,
          zIndex: 1,
        },
        background: {
          color: '#17171F',
          image: '',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1200,
            },
          },
        },

        retina_detect: true,
        opacity: {
          value: 0.1,
          random: false,
          anim: {
            enable: true,
            speed: 2,

            sync: false,
          },
        },
      }}
      //    {
      //     fullScreen: {
      //         enable: false,
      //         zIndex: 1,
      //     },
      //     particles: {
      //         number: {
      //             value: 10,
      //             density: {
      //                 enable: false,
      //                 value_area: 800,
      //             },
      //         },
      //         color: {
      //             value: "#3F3FFF",
      //         },
      //         shape: {
      //             type: "circle",
      //             // "options": {
      //             //     "sides": 5
      //             // }
      //         },
      //         opacity: {
      //             value: 0.8,
      //             random: false,
      //             anim: {
      //                 enable: false,
      //                 speed: 1,
      //                 opacity_min: 0.1,
      //                 sync: false,
      //             },
      //         },
      //         size: {
      //             value: 4,
      //             random: false,
      //             anim: {
      //                 enable: false,
      //                 speed: 40,
      //                 size_min: 0.1,
      //                 sync: false,
      //             },
      //         },
      //         rotate: {
      //             value: 0,
      //             random: true,
      //             direction: "clockwise",
      //             animation: {
      //                 enable: true,
      //                 speed: 5,
      //                 sync: false,
      //             },
      //         },
      //         line_linked: {
      //             enable: true,
      //             distance: 600,
      //             color: "#9191A4",
      //             opacity: 0.4,
      //             width: 2,
      //         },
      //         move: {
      //             enable: true,
      //             speed: 2,
      //             direction: "none",
      //             random: false,
      //             straight: false,
      //             out_mode: "out",
      //             attract: {
      //                 enable: false,
      //                 rotateX: 600,
      //                 rotateY: 1200,
      //             },
      //         },
      //     },
      //     interactivity: {
      //         events: {
      //             onhover: {
      //                 enable: true,
      //                 mode: ["grab"],
      //             },
      //             onclick: {
      //                 enable: false,
      //                 mode: "bubble",
      //             },
      //             resize: true,
      //         },
      //         modes: {
      //             grab: {
      //                 distance: 400,
      //                 line_linked: {
      //                     opacity: 1,
      //                 },
      //             },
      //             bubble: {
      //                 distance: 400,
      //                 size: 40,
      //                 duration: 2,
      //                 opacity: 8,
      //                 speed: 3,
      //             },
      //             repulse: {
      //                 distance: 200,
      //             },
      //             push: {
      //                 particles_nb: 4,
      //             },
      //             remove: {
      //                 particles_nb: 2,
      //             },
      //         },
      //     },
      //     retina_detect: true,
      //     background: {
      //         color: "#17171F",
      //         image: "",
      //         position: "50% 50%",
      //         repeat: "no-repeat",
      //         size: "cover",
      //     },
      // }}
    />
  );
};

export default ParticlesContainer;
