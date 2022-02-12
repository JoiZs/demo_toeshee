import { useContext } from "react";
import Particles from "react-tsparticles";
import { Darkcontext } from "../context/darkCtx";

const Particlebg = () => {
  const particlesInit = async (main: any) => {};

  const particlesLoaded = async (container: any) => {};
  const [isDark, setIsDark] = useContext(Darkcontext);

  return (
    <Particles
      className="fixed -z-10"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: isDark ? "#1e293b" : "#f1f5f9",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.2,
              size: 30,
            },
            push: {
              quantity: 0,
            },
            repulse: {
              distance: 200,
              duration: 0.1,
            },
          },
        },
        particles: {
          color: {
            value: isDark ? "#ffffff" : "#f05214",
          },
          links: {
            color: isDark ? "#ffffff" : "#ee5711",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
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
            value: 0.4,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particlebg;
