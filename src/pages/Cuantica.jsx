import React from "react";
import { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

// COMPONENTES
import BackButton from "../components/BackButton";
import NoiseBackground from "../components/NoiseBackground";
import NextButton from "../components/NextButton";
import RetroVideo from "../components/RetroVideo";
import RetroImage from "../components/RetroImage";
// import RetroImage from "../components/RetroImage";

// IMAGENES
import argollado from "../assets/images/anillado.webp";
import modelos from "../assets/images/nivelesenergia.gif";

// VIDEOS
import quantum from "../assets/videos/quantum.webp";
import dobleRendija from "../assets/images/dobleRendija.webp";

function Cuantica() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <NoiseBackground />
      <BackButton />

      <NextButton />

      <HTMLFlipBook
        width={600}
        height={880}
        size="fixed"
        minWidth={315}
        maxWidth={900}
        minHeight={400}
        maxHeight={1500}
        drawShadow={true}
        showCover={true}
        mobileScrollSupport={true}
      >
        <div className="cursor-pointer flex flex-col justify-center items-center w-full h-full bg-black text-white p-4">
          <div
            style={{ fontFamily: "Caveat, sans-serif" }}
            className=" w-full h-full flex flex-col items-center justify-center px-20 gap-5"
          >
            <h1 className="text-7xl font-semibold text-center mb-5">
              Física Cuántica <br />
            </h1>

            <span className="text-3xl text-center">
              Ni siquiera la propia naturaleza sabe que camino va a seguir el
              electrón. -Richard Feynman
            </span>

            <RetroImage image={quantum} width="600" height="880" />
          </div>
        </div>

        <div className="cursor-pointer flex flex-col justify-center items-center w-full h-full bg-black text-white p-4">
          <div
            style={{ fontFamily: "Caveat, sans-serif" }}
            className=" w-full h-full flex flex-col items-center justify-center px-20 gap-5"
          >
            <span className="text-4xl text-center">
              En el reino cuántico, lo real se traduce a probabilidad
            </span>
          </div>
          <span className="absolute bottom-[2%] left-[5%] text-xl">1</span>
        </div>

        <div className="cursor-pointer flex flex-col justify-center items-center w-full h-full bg-black text-white p-4">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />
          <div
            style={{ fontFamily: "Caveat, sans-serif" }}
            className=" w-full h-full flex flex-col items-center justify-center px-20 gap-5"
          >
            <RetroImage image={dobleRendija} width="600" height="880" />
            <span className="text-3xl text-center">
              El experimento de la{" "}
              <span className="font-bold text-indigo-400">doble rendija</span>{" "}
              nos explica algo fundamental: El universo actúa diferente si sabe
              que estás ahí.
            </span>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">2</span>
        </div>

        <div className="cursor-pointer flex flex-col justify-center items-center w-full h-full bg-black text-white p-4">
          <div
            style={{ fontFamily: "Caveat, sans-serif" }}
            className=" w-full h-full flex flex-col items-center justify-center px-20 gap-5"
          >
            <h1 className="text-5xl font-semibold text-center mb-5">
              Modelos Atómicos - Niveles de Energía<br />
            </h1>
            <RetroImage image={modelos} width="600" height="880" />
            <span className="text-4xl">
              El electrón obedece al orden invisible de la energía.
            </span>
          </div>
          <span className="absolute bottom-[2%] left-[5%] text-xl">3</span>
        </div>

        <div className="cursor-pointer flex justify-center items-center w-full h-full bg-black text-white p-4">
          <div
            style={{ fontFamily: "Caveat, sans-serif" }}
            className=" w-full h-full flex flex-col items-center justify-center px-20"
          >
            <h1 className="text-4xl font-regular text-center mb-10">
              Física Cuántica <br />
            </h1>

            <h1 className="text-4xl font-regular text-center mb-10">
              Física Cuántica <br />
            </h1>

            <h1 className="text-4xl font-regular text-center mb-10">
              Física Cuántica <br />
            </h1>
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Cuantica;
