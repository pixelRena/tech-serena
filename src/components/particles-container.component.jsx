import ThemeContext from "../utils/ThemeContext.utils";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useContext, useCallback } from "react";

const ParticlesContainer = () => {
    const {theme} = useContext(ThemeContext);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return(
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fpsLimit: 60,
            particles: {
                color: {
                    value: `${theme === "dark" ? "#fff": "#000"}`,
                },
                links: {
                    color: `${theme === "dark" ? "#fff": "#000"}`,
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 20,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
        />
    )
}

export default ParticlesContainer;