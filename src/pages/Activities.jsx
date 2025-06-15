import React, { useEffect, useState } from "react";
import Overlay from "../components/Overlay";
import cursor from "../assets/cursores/cursor2.png";

import newton from "../assets/images/three-d/Newton.png";
import maxwell from "../assets/images/three-d/Maxwell.png";
import albert from "../assets/images/three-d/Albert.png";

import formula from "../assets/images/three-d/formulas.png";
import tachon from "../assets/images/three-d/tachon.png";
import flor from "../assets/images/three-d/3dflower.png";
import aladin from "../assets/images/three-d/aladin.png";
import bombillo from "../assets/images/three-d/bombillo.png";
import resorte from "../assets/images/three-d/resorte.png";
import cubito from "../assets/images/three-d/cubito.png";
import pendulo from "../assets/images/three-d/penduloNewton.png";
import sol from "../assets/images/three-d/sol.png";
import sphere from "../assets/images/three-d/sphere.png";

import arrow from "../assets/images/volver.png";

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
        <div className="flex justify-center gap-6 w-full h-full box-border absolute mt-[412px]">
          <img
            className="w-105 h-100 "
            src={albert}
            alt="Isaac Newton's photo"
          />
          <img
            className="w-105 h-100 "
            src={newton}
            alt="Isaac Newton's funny photo"
          />
          <img
            className="w-105 h-100 "
            src={maxwell}
            alt="Isaac Newton's photo"
          />
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
            transform: `translate(-50%, -50%) translateY(${hovered.sphere ? 0 : floatOffset * 2}px)`
          }}
        >
          <img className="hover:scale-120 hover:opacity-50" src={sphere} alt="esfera 3d" />
        </Link>

       <Link to='/sistemas-oscilantes'
  className="w-20 absolute -rotate-20 group"
  style={{
    top: "12%",
    left: "28%",
    transform: `translate(-50%, -50%) translateY(${hovered.resorte ? 0 : floatOffset * 0.9}px)`,
  }}
>
  <img
    src={resorte}
    alt="resorte 3d"
    className="transition-transform duration-300 group-hover:scale-120 group-hover:opacity-50"
  />
  <span className="absolute top-11 -left-9 text-4xl font-bold rotate-20 group-hover:opacity-90">
    Sistemas <br /> Oscilantes
  </span>
</Link>

        <Link
          className="w-50 absolute -rotate-55"
          style={{
            top: "2%",
            left: "48%",
            transform: `translate(-50%, -50%) translateY(${hovered.flor ? 0 : floatOffset * 0.8}px)`,
          }}
        >
          <img className="hover:scale-120 hover:opacity-50" src={flor} alt="flor 3d" />
        </Link>

        <Link
          className="w-25 absolute -rotate-20"
          style={{
            top: "35%",
            left: "30%",
            transform: `translate(-50%, -50%) translateY(${hovered.sol ? 0 : floatOffset * 0.7}px)`,
          }}
        >
          <img className="hover:scale-120 hover:opacity-50" src={sol} alt="sol ilustracion" />
        </Link>

        <Link
          className="w-30 absolute rotate-5"
          style={{
            top: "20%",
            left: "65%",
            transform: `translate(-50%, -50%) translateY(${hovered.cubito ? 0 : floatOffset * 1.8}px)`,
          }}
        >
          <img className="hover:scale-120 hover:opacity-50" src={cubito} alt="cubo 3d" />
        </Link>

        <Link
          className="w-37 absolute -rotate-15"
          style={{
            top: "10%",
            left: "80%",
            transform: `translate(-50%, -50%) translateY(${hovered.bombillo ? 0 : floatOffset * 1.0}px)`,
          }}
        >
          <img className="hover:scale-120 hover:opacity-50" src={bombillo} alt="bombillo 3d" />
        </Link>

        <Link
          className="w-30 absolute -rotate-0"
          style={{
            top: "38%",
            left: "69%",
            transform: `translate(-50%, -50%) translateY(${hovered.aladin ? 0 : floatOffset * 1.6}px)`,
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
            transform: `translate(-50%, -50%) translateY(${hovered.pendulo ? 0 : floatOffset * 1.4}px)`,
          }}
        >
          <img className="hover:scale-120 hover:opacity-50" src={pendulo} alt="pendulo 3d" />
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
