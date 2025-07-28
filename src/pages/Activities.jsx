import React, { useEffect, useState } from "react";
import Overlay from "../components/Overlay";
import cursor from "../assets/cursores/cursor2.webp";

import newton from "../assets/images/three-d/Newton.webp";
import maxwell from "../assets/images/three-d/Maxwell.webp";
import albert from "../assets/images/three-d/Albert.webp";
import yo from "../assets/images/yo.png";
import diana from "../assets/images/diana.png";
import gina from "../assets/images/ginaa.png";

import formula from "../assets/images/three-d/formulas.webp";
import tachon from "../assets/images/three-d/tachon.webp";
import corazon from "../assets/images/three-d/corazon.webp";
import aladin from "../assets/images/three-d/aladin.webp";
import bombillo from "../assets/images/three-d/bombillo.webp";
import resorte from "../assets/images/three-d/resorte.webp";
import atomoTwo from "../assets/images/atomoTwo.webp";
import pendulo from "../assets/images/three-d/penduloNewton.webp";
import sol from "../assets/images/three-d/sol.webp";
import sphere from "../assets/images/three-d/sphere.webp";
import quantum from "../assets/images/quantum.webp";
import arrow from "../assets/images/volver.webp";

import NoiseBackground from "../components/NoiseBackground";
import { Link, useNavigate } from "react-router-dom";

const Activities = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isFading, setIsFading] = useState(false);

  const [floatOffset, setFloatOffset] = useState(0);
  const [hovered, setHovered] = useState({});

  useEffect(() => {
    let animationFrameId;
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      setFloatOffset(Math.sin(progress / 500) * 10); // Adjust amplitude and speed here
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    setIsFading(true);
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  return (
    <main
      className={`relative w-full h-full box-border flex flex-col items-center overflow-hidden transition-opacity duration-2000 ease-in-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      onMouseMove={handleMouseMove}
    >
      <Link
        onClick={handleClick}
        className="z-90 cursor-pointer absolute top-20 left-[10%] flex items-center gap-2 justify-center w-fit box-border hover:opacity-50"
      >
        <img src={arrow} alt="arrow" className="w-10 h-10" />
        <span
          className="text-3xl font-semibold"
          style={{ fontFamily: "Caveat, sans-serif" }}
        >
          Volver
        </span>
      </Link>

      <NoiseBackground />
      <Overlay />
      <h1
        className="text-5xl font-semibold mt-[65px] mx-auto py-2 px-5 border-white border-2 rounded-xl"
        style={{ fontFamily: "Caveat, sans-serif" }}
      >
        Selecciona un Tema
      </h1>

      <div className="flex justify-center w-full h-full box-border relative">
        {/* <img
          src={johan}
          alt="johan"
          className="relative top-120 left-[28%] w-80 h-fit"
        /> */}
        <div className="flex justify-center gap-6 w-full box-border absolute bottom-0">
          <img className="w-105 h-100 " src={albert} />
          <img className="w-105 h-100 " src={gina} />
          <img
            className="w-55 h-100 "
            src={diana}
          />
          <img className="mt-4 w-95 h-95 " src={yo} />
          
        </div>

        <div className="flex items-center gap-6 justify-center w-full h-full box-border relative mt-[-70px]">
          <div>
            <img className="w-50" src={tachon} alt="" />
          </div>
          <div>
            <img
              className="w-70"
              src={formula}
              alt="Isaac Newton's funny photo"
            />
          </div>
        </div>

        <Link
          className="w-30 absolute"
          style={{
            top: "35%",
            left: "15%",
            transform: `translate(-50%, -50%) translateY(${
              hovered.sphere ? 0 : floatOffset * 2
            }px)`,
          }}
        >
          <img
            className="hover:scale-120 hover:opacity-50"
            src={sphere}
            alt="esfera 3d"
          />
        </Link>

        <Link
          to="/sistemas-oscilantes"
          className="w-20 absolute -rotate-20 group"
          style={{
            top: "12%",
            left: "28%",
            transform: `translate(-50%, -50%) translateY(${
              hovered.resorte ? 0 : floatOffset * 0.9
            }px)`,
          }}
        >
          <img
            src={resorte}
            alt="resorte 3d"
            className="transition-transform duration-300 group-hover:scale-120 group-hover:opacity-50"
          />
          <span className="absolute top-11 -left-9 text-center text-4xl font-bold rotate-20 group-hover:opacity-90">
            Introducción Sistemas <br /> Oscilantes
          </span>
        </Link>

        <Link
          to="/laboratorios-oscilantes"
          className="w-25 absolute -rotate-30 group"
          style={{
            top: "13%",
            left: "48%",
            transform: `translate(-50%, -50%) translateY(${
              hovered.corazon ? 0 : floatOffset * 0.8
            }px)`,
          }}
        >
          <img
            className="relative group-hover:scale-120 group-hover:opacity-50"
            src={corazon}
            alt="corazon 3d"
          />

          <span className="absolute top-11 -left-9 text-center text-4xl font-bold rotate-20 group-hover:opacity-90">
            Sistemas <br /> Oscilantes
          </span>
        </Link>

        <Link
          className="w-25 absolute -rotate-20"
          style={{
            top: "35%",
            left: "30%",
            transform: `translate(-50%, -50%) translateY(${
              hovered.sol ? 0 : floatOffset * 0.7
            }px)`,
          }}
        >
          <img
            className="hover:scale-120 hover:opacity-50"
            src={sol}
            alt="sol ilustracion"
          />
        </Link>

        <Link
          to="/ondas"
          className="w-25 absolute rotate-5 group"
          style={{
            top: "20%",
            left: "62%",
            transform: `translate(-50%, -50%) translateY(${
              hovered.cubito ? 0 : floatOffset * 1.8
            }px)`,
          }}
        >
          <img
            className="group-hover:scale-120 group-hover:opacity-50"
            src={quantum}
            alt="reloj cuantico"
          />
          <span className="absolute top-11 -left-5 text-center text-5xl font-bold ">
            Ondas
          </span>
        </Link>

        <Link
          to="/cuantica"
          className="w-29 absolute -rotate-15"
          style={{
            top: "10%",
            left: "77%",
            transform: `translate(-50%, -50%) translateY(${
              hovered.bombillo ? 0 : floatOffset * 1.0
            }px)`,
          }}
        >
          <img
            className="hover:scale-120 hover:opacity-50"
            src={atomoTwo}
            alt="atomo"
          />

          <span className="absolute top-11 -left-8 text-center text-5xl font-bold ">
            Quantica
          </span>
        </Link>

        <Link
          className="w-30 absolute -rotate-0"
          style={{
            top: "38%",
            left: "69%",
            transform: `translate(-50%, -50%) translateY(${
              hovered.aladin ? 0 : floatOffset * 1.6
            }px)`,
          }}
        >
          <img
            className="hover:scale-120 hover:opacity-50"
            src={aladin}
            alt="ilustracion lampara aladin"
          />
        </Link>

        <Link
          className="w-45 absolute -rotate-0"
          style={{
            top: "35%",
            left: "85%",
            transform: `translate(-50%, -50%) translateY(${
              hovered.pendulo ? 0 : floatOffset * 1.4
            }px)`,
          }}
        >
          <img
            className="hover:scale-120 hover:opacity-50"
            src={pendulo}
            alt="pendulo 3d"
          />
        </Link>
      </div>

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

export default Activities;
