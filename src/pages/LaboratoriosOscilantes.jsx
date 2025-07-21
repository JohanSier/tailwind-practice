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
import oscilanteCorto from "../assets/videos/oscilanteCorto.mp4";
import sistemaElastico from "../assets/videos/sistemaElastico.mp4";
import amortiguadaSF from "../assets/videos/amortiguadaSF.gif";
import ideales from "../assets/videos/ideales.mp4";
import conAmortiguamiento from "../assets/videos/conAmortiguamiento.mp4";
import resonanciaFull from "../assets/videos/resonanciaFull.mp4";

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
            className=" w-full h-full flex flex-col items-center justify-center px-20"
          >
            <small className="bg-black text-white text-lg font-semibold px-3 rounded-full mt-6 mb-4 ">
              Practicas
            </small>
            <h1 className="text-5xl font-semibold text-center mb-5">
              Entendiendo las Oscilaciones con <br /> las Prácticas en el
              Laboratorio
            </h1>

            <div className="flex gap-5">
              <div className="flex flex-col gap-4">
                <RetroVideo
                  video={oscilacion}
                  className="mb-4"
                  loop
                  muted
                  autoPlay
                  playsInline
                  caption="Sistemas Oscilantes"
                />

                <RetroVideo
                  video={resonanciaLab}
                  className="my-4"
                  loop
                  width="100%"
                  height="140px"
                  muted
                  autoPlay
                  playsInline
                  caption="Resonancia"
                />

              </div>

              <div className="flex flex-col">
                <RetroVideo
                  video={pendulo}
                  className="mt-10"
                  loop
                  muted
                  autoPlay
                  width="100%"
                  playsInline
                  caption="Experimentando con un péndulo"
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
              <RetroVideo
                containerWidth="95%"
                video={oscilanteCorto}
                width="95%"
                height="220px"
                caption="Sistema Oscilante"
              />

              <h2
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[80%] text-xl font-regular mt-5"
              >
                Lo que vemos en el video de arriba son movimientos que se
                repiten en unos intervalos especificos de tiempo. A esto lo
                conocemos en física como <strong>Sistema Oscilante</strong>{" "}
                <br />
                <br />Y las masas que están acopladas al sistema se conocen como{" "}
                <strong>Osciladores</strong>
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">2</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black p-8">
          <div className="relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="mt-[30%] flex flex-col justify-center items-center gap-5">
              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[80%] text-3xl font-bold text-center"
              >
                Sistemas Oscilantes Observados
              </h2>
              <div className="flex flex-col justify-center items-center">
                <RetroVideo
                  containerWidth="95%"
                  video={oscilanteCorto}
                  width="95%"
                  height="220px"
                  caption="Sistema: Péndulo"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex gap-5">
                  <RetroVideo
                    containerWidth="95%"
                    video={sistemaElastico}
                    width="95%"
                    height="220px"
                    caption="Sistema: Elástico"
                  />

                  <div className="flex flex-col gap-2 ">
                    <div className="flex h-40 flex-col bg-amber-500 text-black p-5 rounded items-center ">
                      <span className="text-2xl font-bold ">Notas:</span>
                      <p className="text-[.9rem] font-regular">
                        En los sistemas elásticos se observa una{" "}
                        <strong>Elongación</strong> y una rigidez del resorte en
                        donde esta acoplada la masa
                      </p>
                    </div>

                    <div className="flex h-40 flex-col bg-blue-700 text-[#e4e4e4] p-5 rounded items-center gap-5">
                      <p className="text-[.9rem] font-regular">
                        Un <strong>Periodo</strong> es el tiempo que demora una
                        oscilación
                      </p>
                      <p className="text-[.9rem] font-regular">
                        Las oscilaciones que un oscilador realiza en segundo se
                        conoce como <strong>Frecuencia</strong> y se mdie en
                        Hertz (Hz)
                      </p>
                    </div>
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
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[80%] text-lg font-regular mt-5"
              >
                En el video de arriba lo que se experimenta es el efecto de{" "}
                <strong>resonancia</strong> <br />
                <br />
                Estando las dos masas a la misma altura y conectadas por media
                de una cuerda en común. <br /> <br />
                Una actúa como fuente de movimiento y otra como receptor sin
                embargo a medida que pasa el tiempo se transfiere la oscilación
                y de un momento a otro no se sabe cual fue la fuente original y
                el receptor.
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
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[80%] text-lg font-regular mt-5"
              >
                Por último, arriba se observa el concepto de{" "}
                <strong>fase entre dos movimientos</strong> <br />
                <br />
                La fase entre dos movimientos indica si uno va adelantado o
                atrasado respecto al otro. Es como si dos personas saltaran en
                la misma forma, pero una empieza un poco antes o después: hacen
                lo mismo, pero no al mismo tiempo.
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">6</span>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default LaboratoriosOscilantes;
