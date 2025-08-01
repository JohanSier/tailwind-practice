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
import SketchfabHeartModel from "../components/SketchfabHeartModel";

// IMAGENES
import argollado from "../assets/images/anillado.webp";
import qr from "../assets/images/frame.png"
// VIDEOS
import oscilacion from "../assets/videos/oscilacion.mp4";
import pendulo from "../assets/videos/pendulo.mp4";
import resonanciaLab from "../assets/videos/resonanciaLab.mp4";
import oscilanteCorto from "../assets/videos/oscilanteCorto.mp4";
import sistemaElastico from "../assets/videos/sistemaElastico.mp4";
import amortiguadaSF from "../assets/videos/amortiguadaSF.gif";
import ideales from "../assets/videos/ideales.mp4";
import conAmortiguamiento from "../assets/videos/conAmortiguamiento.mp4";
import resonanciaFull from "../assets/videos/resonanciaFull.mp4";
import osElectrica from "../assets/videos/osElectrica.mp4";
import osElectricasDos from "../assets/videos/osElectricas2.mp4";
import circuito from "../assets/videos/circuito.mp4";

function LaboratoriosOscilantes() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <NoiseBackground />
      <BackButton />

      <NextButton page="/ondas" />

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
            className=" w-full h-full flex flex-col items-center justify-center px-10"
          >
            <small className="bg-black text-white text-lg font-semibold px-3 rounded-full mt-6 mb-4 ">
              Practicas
            </small>
            <h1 className="text-5xl font-semibold text-center mb-5">
              Jugando con los Sistemas Oscilantes para entenderlos
            </h1>

            <div className="flex gap-5">
              <div className="flex flex-col">
                <RetroVideo
                  video={pendulo}
                  loop
                  muted
                  autoPlay
                  containerWidth="80%"
                  width="75%"
                  containerHeight="fit-content"
                  height="fit-content"
                  playsInline
                  caption={
                    <>
                      <span>
                        Midiendo la{" "}
                        <span className="text-purple-500">amplitud</span>,{" "}
                        <span className="text-amber-500">periodo</span> y{" "}
                        <span className="text-red-800">frecuencia</span>
                      </span>
                    </>
                  }
                />
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
                Preguntas para generar comprensión
              </h2>
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[2.5rem] opacity-75 text-center"
              >
                ¿Qué es un sistema oscilante?
              </p>

              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[2rem] opacity-75 text-center"
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

          {/* <SketchfabHeartModel /> */}
          <div className="relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="mt-[30%] flex flex-col justify-center items-center">
              <RetroVideo
                containerWidth="95%"
                video={oscilanteCorto}
                width="95%"
                height="220px"
                caption="Sistema Oscilante"
              />

              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[80%] text-3xl font-regular mt-5 text-center"
              >
                Un sistema oscilante es el arte de moverse sin avanzar, bailando
                entre extremos con la precisión de un latido.
                <br />
                <br />
                Oscila como si tuviera memoria de dónde empezó,{" "}
                <span className="text-sky-400 font-bold">
                  volviendo una y otra vez al mismo lugar
                </span>
                .
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">2</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black p-8">
          <div className="relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="flex flex-col justify-center items-center gap-5">
              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[80%] text-4xl font-bold text-center"
              >
                Sistemas Oscilantes con los que jugamos:
              </h2>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="flex gap-5">
                  <div className="flex flex-col">
                    <RetroVideo
                      containerWidth="95%"
                      video={oscilanteCorto}
                      width="95%"
                      height="100%"
                    />
                    <p
                      style={{ fontFamily: "Caveat, sans-serif" }}
                      className="w-[80%] -mt-50 ml-5 text-3xl font-regular text-center"
                    >
                      El péndulo nos prestó su baile
                    </p>
                  </div>

                  <div className="flex flex-col">
                    <RetroVideo
                      containerWidth="95%"
                      video={sistemaElastico}
                      width="95%"
                      height="100%"
                    />

                    <p
                      style={{ fontFamily: "Caveat, sans-serif" }}
                      className="w-full mt-5 text-3xl font-regular text-center"
                    >
                      Y el sistema elástico nos regaló su <span className="text-purple-700 font-bold">elasticidad</span> y <span className="text-red-800 font-bold">rigidez</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute bottom-[2%] left-[5%] text-xl">3</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black p-4">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />

          <h2
            style={{ fontFamily: "Caveat, sans-serif" }}
            className="text-3xl font-bold mt-[11%] text-center"
          >
            Tipos de Oscilaciones
          </h2>

          <div className="flex-col mt-10 relative flex w-full h-[85%] px-5 gap-5">
            <div className="flex gap-1">
              <div className="flex h-fit flex-col bg-blue-700 text-[#e4e4e4] p-5 rounded items-center gap-5">
                <h2 className="text-xl font-bold text-center">
                  Oscilaciones Ideales
                </h2>
                <video
                  src={ideales}
                  className="w-35 h-fit border-amber-200"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              </div>

              <div className="flex h-fit flex-col bg-black text-[#e4e4e4] p-5 rounded items-center gap-5">
                <h2 className="text-xl font-bold text-center">
                  Oscilaciones amortiguada sin forzamiento
                </h2>
                <img
                  src={amortiguadaSF}
                  className="w-35 h-fit border-amber-200"
                />
              </div>

              <div className="flex h-fit flex-col bg-purple-700 text-[#e4e4e4] p-5 rounded items-center gap-5">
                <h2 className="text-xl font-bold text-center">
                  Oscilaciones amortiguada con forzamiento
                </h2>
                <video
                  src={conAmortiguamiento}
                  className="mb-4"
                  loop
                  muted
                  autoPlay
                  playsInline
                />
              </div>
            </div>

            <div className="px-5 mt-2 flex flex-col gap-3 h-fit w-full">
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="text-[.9rem] font-regular"
              >
                <span className=" font-bold text-xl">Oscilación Ideal:</span>{" "}
                Movimiento constante sin pérdida de energía.
              </p>
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="text-[.9rem] font-regular"
              >
                <span className=" font-bold text-xl">
                  Oscilación Amortiguada sin Forzamiento:
                </span>{" "}
                Pierde energía con el tiempo por fricción o resistencia.
              </p>
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="text-[.9rem] font-regular"
              >
                <span className=" font-bold text-xl">
                  Oscilación Amortiguada con Forzamiento:
                </span>{" "}
                Aunque pierde energía, una fuerza externa la mantiene en
                movimiento, alcanzando una amplitud estable.
              </p>
            </div>
          </div>

          <span className="absolute bottom-[2%] right-[5%] text-xl">4</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black p-8">
          <div className="relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="mt-[30%] flex flex-col justify-center items-center">
              <RetroVideo
                containerWidth="95%"
                video={resonanciaFull}
                controls={true}
                width="95%"
                height="220px"
                caption="Efecto de Resonancia"
                autoPlay={true}
              />
              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[80%] text-3xl font-regular mt-10"
              >
                En el video de arriba lo que se experimenta es el efecto de{" "}
                <strong>resonancia</strong> <br />
                <br />
                Como se ha reiterado la resonancia no es más que{" "}
                <span className="font-bold text-green-500">
                  la sincronía
                </span>{" "}
                entre dos entes.
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] left-[5%] text-xl">5</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black p-8">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />

          <div className="relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="mt-[30%] flex flex-col justify-center items-center">
              <RetroVideo
                containerWidth="fit"
                video={ideales}
                width="fit"
                height="380px"
                caption="Fase"
              />

              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[90%] text-3xl font-regular text-center mt-5"
              >
                Por último, arriba se observa el concepto de{" "}
                <strong>fase entre dos movimientos</strong> <br />
                <br />
                La fase es{" "}
                <span className="font-bold text-purple-500">
                  armonía en las oscilaciones
                </span>
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">6</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black p-8">
          <div className="relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="mt-[30%] flex flex-col justify-center items-center">
              {/* <SketchfabHeartModel /> */}
              <img className="w-80" src={qr} alt="heart" />
              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[80%] text-3xl text-center font-regular mt-5"
              >
                Escanea el código y juega con el sistema oscilante más básico para la vida:{" "}
                <span className="font-bold text-red-500">Nuestro corazón</span>{" "}
              
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] left-[5%] text-xl">7</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black p-8">
        <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />
          <div className="relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="mt-[30%] flex flex-col justify-center items-center">
              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[80%] text-3xl text-center font-regular mt-5"
              >
                <span className="font-bold text-indigo-400">
                  Los electrones también gozan.{" "}
                </span>
                Su baile invisible da vida a la corriente que mueve al mundo.
                <br />
                <br />
              </h2>

              <RetroVideo
                containerWidth="fit"
                video={osElectrica}
                width="fit"
                height="200px"
              />

              <RetroVideo
                margin="20px"
                containerWidth="fit"
                video={circuito}
                width="fit"
                height="160px"
              />
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">8</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black p-8">
          <div className="relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="mt-[30%] flex flex-col justify-center items-center">
              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[80%] text-3xl font-regular mt-5"
              >
                La oscilación eléctrica es comunicación sútil. Un puente entre
                lo visible y lo invisible
                <br /> <br />
                <span className="font-bold text-pink-500">
                  Para cuantificar estas oscilaciones hay que hacer que se
                  manifiesten
                </span>
              </h2>

              <RetroVideo
                margin="25px"
                containerWidth="fit"
                video={osElectricasDos}
                width="fit"
                height="200px"
              />
            </div>
          </div>
          <span className="absolute bottom-[2%] left-[5%] text-xl">9</span>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default LaboratoriosOscilantes;
