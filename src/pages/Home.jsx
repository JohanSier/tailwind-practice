import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logouniversidad from "../assets/images/logouniversidad.webp";
import flor from "../assets/images/flor.webp";
import fuego from "../assets/images/fuego.webp";
import reloj from "../assets/images/reloj.webp";
import sonrisa from "../assets/images/sonrisa.webp";
import estrella from "../assets/images/estrella.webp";
import cohete from "../assets/images/cohete.webp";
import bombilla from "../assets/images/bombilla.webp";
import atomos from "../assets/images/atomos.webp";
import cerebro from "../assets/images/cerebro.webp";
import cursor from "../assets/cursores/cursor3.webp";
import NoiseBackground from "../components/NoiseBackground";

const Home = () => {
  let date = new Date();

  const navigate = useNavigate();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const iconOffsetX = -(mousePos.x - window.innerWidth / 2) * 0.02;
  const iconOffsetY = -(mousePos.y - window.innerHeight / 2) * 0.02;

  const handleClick = () => {
    setIsFading(true);
    setTimeout(() => {
      navigate("/actividades"); // Adjust the path as needed
    }, 2000);
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className={`w-full h-full box-border relative transition-opacity duration-2000 ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
        <defs>
          <filter id="squiggly-0">
            <feTurbulence
              baseFrequency="0.2"
              numOctaves="3"
              result="noise"
              seed="0"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence
              baseFrequency="0.2"
              numOctaves="3"
              result="noise"
              seed="1"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>
          <filter id="squiggly-2">
            <feTurbulence
              baseFrequency="0.2"
              numOctaves="3"
              result="noise"
              seed="2"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence
              baseFrequency="0.2"
              numOctaves="3"
              result="noise"
              seed="3"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>
          <filter id="squiggly-4">
            <feTurbulence
              baseFrequency="0.2"
              numOctaves="3"
              result="noise"
              seed="4"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
        </defs>
        <style>{`
          @keyframes squiggly-anim {
            0% { filter: url(#squiggly-0); }
            25% { filter: url(#squiggly-1); }
            50% { filter: url(#squiggly-2); }
            75% { filter: url(#squiggly-3); }
            100% { filter: url(#squiggly-4); }
          }

          .squiggly {
            animation: squiggly-anim 1.5s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(-2px); }
            50% { transform: translateY(-20px); }
          }

          .float-1 {
            animation: float 2s ease-in-out infinite;
            animation-delay: 0s;
          }

          .float-2 {
            animation: float 3s ease-in-out infinite;
            animation-delay: 1s;
          }

          .float-3 {
            animation: float 3s ease-in-out infinite;
            animation-delay: 0.5s;
          }

          .float-4 {
            animation: float 2.2s ease-in-out infinite;
            animation-delay: 1.3s;
          }

          .float-5 {
            animation: float 3.8s ease-in-out infinite;
            animation-delay: 0.8s;
          }
        `}</style>
      </svg>
      <span className="text-xl absolute top-20 left-35">
        “La luz es la mensajera del universo.”
        <br /> — James Clerk Maxwell
      </span>
      <span className="absolute top-20 right-35 block m-3 text-xl">
        {date.toLocaleDateString("en-GB")}
      </span>

      <NoiseBackground />

      <section className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden ">
        <h1 className="text-6xl font-semibold">El universo develado <br/>a través de las ondas</h1>
        <h2 className="text-2xl font-regular mt-4"> - Hecho Por - </h2>
        <h3 className="text-3xl font-semibold mt-4">
          Johan Sierra, Gina Acosta, Diana Sanchez{" "}
        </h3>
        <img
          className="w-40 mt-2"
          src={logouniversidad}
          alt="logo universidad central"
        />
        {/* IMPORTING MOVING ICONS */}
        <div
          className="absolute inset-0 squiggly origin-top-left scale-[0.5] sm:scale-75 md:scale-100"
          style={{
            transform: `translate(${iconOffsetX}px, ${iconOffsetY}px)`,
          }}
        >
          <img
            className="w-15 absolute -rotate-15 float-1"
            style={{ top: "44%", left: "24%" }}
            src={reloj}
            alt="reloj"
          />
          <img
            className="w-15 absolute float-2"
            style={{ top: "30%", left: "26%" }}
            src={atomos}
            alt="atomos"
          />
          <img
            className="w-15 absolute -rotate-12 float-3"
            style={{ top: "27%", left: "37%" }}
            src={bombilla}
            alt="bombilla"
          />
          <img
            className="w-18 absolute rotate-15 float-4"
            style={{ top: "28%", left: "50%" }}
            src={cerebro}
            alt="cerebro"
          />
          <img
            className="w-18 absolute rotate-12 float-5"
            style={{ top: "28%", right: "31%" }}
            src={cohete}
            alt="cohete"
          />
          <img
            className="w-15 absolute -rotate-12 float-2"
            style={{ top: "45%", right: "25%" }}
            src={flor}
            alt="flor"
          />
          <img
            className="w-15 absolute -rotate-5 float-3"
            style={{ top: "63%", right: "35%" }}
            src={estrella}
            alt="estrella"
          />
          <img
            className="w-14 absolute rotate-10 float-1"
            style={{ top: "68%", left: "50%" }}
            src={sonrisa}
            alt="sonrisa"
          />
          <img
            className="w-15 absolute -rotate-15 float-4"
            style={{ top: "63%", left: "37%" }}
            src={fuego}
            alt="fuego"
          />
        </div>
      </section>

      <span className="absolute font-light bottom-20 right-35 block mr-3 text-right text-2xl animate-pulse">
        HAZ CLIC EN CUALQUIER LUGAR
        <br />
        PARA COMENZAR
      </span>

      {/* CURSOR */}
      <div
        className="fixed w-10 h-10 pointer-events-none z-50"
        style={{
          top: mousePos.y,
          left: mousePos.x,
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src={cursor} alt="cursor" />
      </div>
    </main>
  );
};

export default Home;
