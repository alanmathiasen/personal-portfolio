import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';

const ParticlesContainer = ({ styles }: { styles: string | undefined }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's
    // the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // await loadLinksPreset(engine);
    await loadFull(engine);
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
        background: {
          color: {
            value: '#19171D',
          },
        },
        fullScreen: {
          enable: false,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#9E0059',
          },
          links: {
            color: '#5f1a37',
            distance: 150,
            enable: true,
            opacity: 0.8,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            // directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
      // preset: 'links',
      // fullScreen: {
      //   enable: false,
      //   zIndex: 1,
      // },
      // background: {
      //   color: '#17171F',
      //   image: '',
      //   position: '50% 50%',
      //   repeat: 'no-repeat',
      //   size: 'cover',
      // },

      // particles: {
      //   shape: { type: 'square' },
      //   number: {
      //     value: 200,
      //     density: {
      //       enable: true,
      //       value_area: 1500,
      //     },
      //   },
      // },

      // retina_detect: true,
      // opacity: {
      //   value: 0.1,
      //   random: false,
      //   anim: {
      //     enable: true,
      //     speed: 2,

      //     sync: false,
      //   },
      // },
      // move: {
      //   enable: true,
      //   speed: 20,
      //   direction: 'none',
      //   random: false,
      //   straight: false,
      //   out_mode: 'out',
      //   attract: {
      //     enable: false,
      //     rotateX: 600,
      //     rotateY: 1200,
      //   },
      // },
    />
  );
};

export default ParticlesContainer;
