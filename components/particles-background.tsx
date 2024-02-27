import particlesDark from "@/config/particlesDark";
import particlesLight from "@/config/particlesLight";
import { useThemeContext } from "@/context/theme-context";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const { theme } = useThemeContext();
  const [particles, setParticles] = useState(particlesDark);
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useLayoutEffect(() => {
    switch (theme) {
      case "dark":
        setParticles(particlesDark);
        break;
      case "light":
        setParticles(particlesLight);
        break;
    }
  }, [theme]);

  return <>{init && <Particles options={particles as ISourceOptions} />}</>;
}
