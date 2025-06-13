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
import circle from "../assets/images/three-d/circle.png";
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
        className="z-90 cursor-pointer absolute top-20 left-30 flex items-center gap-2 justify-center w-fit box-border hover:opacity-50"
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
          className="w-30 absolute bottom-117 left-45"
          style={{
            transform: `translateY(${hovered.sphere ? 0 : floatOffset * 2}px)`,
          }}
        >
          <img className="hover:scale-120" src={sphere} alt="esfera 3d" />
        </Link>

        <Link
          onMouseEnter={() =>
            setHovered((prev) => ({ ...prev, resorte: true }))
          }
          onMouseLeave={() =>
            setHovered((prev) => ({ ...prev, resorte: false }))
          }
          className="w-20 absolute top-9 left-95 -rotate-20"
          style={{
            transform: `translateY(${
              hovered.resorte ? 0 : floatOffset * 0.9
            }px)`,
          }}
        >
          <img className="hover:scale-120" src={resorte} alt="resorte 3d" />
        </Link>

        <Link
          className="w-50 absolute top-7 left-165 -rotate-55"
          style={{
            transform: `translateY(${hovered.flor ? 0 : floatOffset * 0.8}px)`,
          }}
        >
          <img className="hover:scale-120" src={flor} alt="flor 3d" />
        </Link>

        <Link
          className="w-25 absolute top-65 left-100 -rotate-20"
          style={{
            transform: `translateY(${hovered.sol ? 0 : floatOffset * 0.7}px)`,
          }}
        >
          <img className="hover:scale-120" src={sol} alt="sol ilustracion" />
        </Link>

        <Link
          className="w-30 absolute top-15 right-135 rotate-5"
          style={{
            transform: `translateY(${
              hovered.cubito ? 0 : floatOffset * 1.8
            }px)`,
          }}
        >
          <img className="hover:scale-120" src={cubito} alt="cubo 3d" />
        </Link>

        <Link
          className="w-37 absolute top-0 right-59 -rotate-15"
          style={{
            transform: `translateY(${
              hovered.bombillo ? 0 : floatOffset * 1.0
            }px)`,
          }}
        >
          <img className="hover:scale-120" src={bombillo} alt="bombillo 3d" />
        </Link>

        <Link
          className="w-30 absolute top-60 right-95 -rotate-0"
          style={{
            transform: `translateY(${
              hovered.aladin ? 0 : floatOffset * 1.6
            }px)`,
          }}
        >
          <img
            className="hover:scale-120"
            src={aladin}
            alt="ilustracion lampara aladin"
          />
        </Link>
        
        <Link
          className="w-45 absolute top-55 right-30 -rotate-0"
          style={{
            transform: `translateY(${
              hovered.pendulo ? 0 : floatOffset * 1.4
            }px)`,
          }}
        >
          <img className="hover:scale-120" src={pendulo} alt="pendulo 3d" />
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
