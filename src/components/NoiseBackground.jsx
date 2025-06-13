import React from "react";
import ruidoVisual from "../assets/images/three-d/granular.png";
import "../index.css";

const NoiseBackground = () => {
  return (
    <div
    className="fixed top-0 left-0 w-[300%] h-[300%] opacity-8 z-[-10] pointer-events-none animate-noise"
    style={{
      backgroundImage: `url(${ruidoVisual})`,
      backgroundRepeat: "repeat",
      imageRendering: "pixelated",
    }}
  />
  );
};

export default NoiseBackground;