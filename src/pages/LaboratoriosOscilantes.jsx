import React from "react";
import { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

// COMPONENTES
import BackButton from "../components/BackButton";
import NoiseBackground from "../components/NoiseBackground";
// import DraggableCard from "../components/DraggableCard";
// import RetroImage from "../components/RetroImage";
import RetroVideo from "../components/RetroVideo";
import NextButton from "../components/NextButton";

// IMAGENES
import argollado from "../assets/images/anillado.webp";

// VIDEOS
import oscilacion from "../assets/videos/oscilacion.mp4";
import pendulo from "../assets/videos/pendulo.mp4";
import resonanciaLab from "../assets/videos/resonanciaLab.mp4";
import oscilanteCorto from "../assets/videos/oscilanteCorto.mp4"

function LaboratoriosOscilantes() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <NoiseBackground />
      <BackButton />

      <NextButton page="/ondas-luz" />

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
        <div className="cursor-pointer flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          <span></span>
          <div
            style={{ fontFamily: "Caveat, sans-serif" }}
            className=" w-full h-full flex flex-col items-center justify-center px-20"
          >
            <small className="bg-black text-white text-lg font-semibold px-3 rounded-full mt-6 mb-4 ">
              Practicas
            </small>
            <h1 className="text-5xl font-semibold text-center mb-5">
              Entendiendo las Oscilaciones con <br /> las Prácticas en el Laboratorio
            </h1>

            <div className="flex gap-2">
              <div className="flex flex-col">
                <video
                  src={oscilacion}
                  className="mb-4"
                  loop
                  muted
                  autoPlay
                  playsInline
                  alt="Entendiendo la amplitud en péndulo"
                />
                <p className="text-[.9rem]" style={{ fontFamily: "Montserrat, sans-serif" }}>Entendiendo las oscilaciones</p>

                <video
                  src={resonanciaLab}
                  className="my-4"
                  loop
                  muted
                  autoPlay
                  playsInline
                  alt="Experimentando el efecto de resonancia con dos masas oscilando"
                />
                <p className="text-[.9rem]" style={{ fontFamily: "Montserrat, sans-serif" }}>Experimentando el efecto de resonancia con dos masas oscilando</p>
              </div>


              <div className="flex flex-col">

                <video
                  src={pendulo}
                  className="mb-4"
                  loop
                  muted
                  autoPlay
                  playsInline
                  alt="profesor de fisica"
                />
                <p className="text-[.9rem]" style={{ fontFamily: "Montserrat, sans-serif" }}>Experimentando con un péndulo y cronómetrandolo</p>

              </div>

            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full bg-amber-50 text-black py-4 px-10">
          

          <div className="mt-[20%] flex flex-col items-center justiy-center w-full h-[85%]">


            <div className="flex flex-col items-center gap-1 mt-7 w-full">
            <h2
            style={{ fontFamily: "Caveat, sans-serif" }}
            className="mt-10 text-3xl font-bold text-center"
          >
            Temas a Resolver al final del apartado:
          </h2>
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[2.5rem] opacity-75 text-center"
              >
                ¿Qué es un sistema oscilante?
              </p>

              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[2rem] opacity-75 text-center text-center"
              >
                ¿Cómo medir el periodo?
              </p>

              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[1rem] opacity-75 text-center"
              >
                ¿Depende del periodo de la amplitud inicial ?
              </p>

              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[3rem] opacity-75 text-center"
              >
                ¿Qué tipo de oscilaciones hay?
              </p>

              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[1.5rem] opacity-75 text-center"
              >
                ¿Cómo veo representada la resonancia?
              </p>
            </div>
          </div>

          <span className="absolute bottom-[2%] left-[5%] text-xl">1</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black p-8">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />

          <div className="relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="mt-[30%] flex flex-col justify-center items-center">
            <video
                  src={oscilanteCorto}
                  className="mb-4"
                  loop
                  muted
                  autoPlay
                  playsInline
                  alt="Explicacion sistemas oscilantes"
                />
              <h2 style={{ fontFamily: "Montserrat, sans-serif" }} className="w-[80%] text-xl font-regular mt-5">Lo que vemos en el video de arriba son movimientos que se repiten en unos intervalos especificos de tiempo. A esto lo conocemos en física como <strong>Sistema Oscilante</strong></h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">2</span>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default LaboratoriosOscilantes;
