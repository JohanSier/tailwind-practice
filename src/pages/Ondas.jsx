import React from "react";
import { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

// COMPONENTES
import BackButton from "../components/BackButton";
import NoiseBackground from "../components/NoiseBackground";
// import DraggableCard from "../components/DraggableCard";
import RetroImage from "../components/RetroImage";
import RetroVideo from "../components/RetroVideo";
import NextButton from "../components/NextButton";
import LightBulb from "../components/LightBulb";
import DrumKit from "../components/DrumKit";

// IMAGENES
import tresNodos from "../assets/images/tresNodos.jpeg";
import argollado from "../assets/images/anillado.webp";
import frontera from "../assets/images/frontera.png";
import amortiguacion from "../assets/images/suspension.png";
import tension from "../assets/images/tension.png";
import longitudOnda from "../assets/images/longitudDeOnda.png";
import difraccion from "../assets/images/difraccion.jpeg";
import prisma from "../assets/images/prisma.jpeg";

// VIDEOS
import tresCuerdas from "../assets/videos/tresCuerdas.mp4";
import cuerdaOnda from "../assets/videos/cuerdaOnda.mp4";
import ondasObstaculos from "../assets/videos/ondasConObstaculos.mp4";
import cuerdaDirecciones from "../assets/videos/cuerdaDistintasDirecciones.mp4";
import vibracionOndas from "../assets/images/vibracionesOndas.jpeg";
import velocidadOnda from "../assets/videos/velocidadOnda.mp4";
import nodos from "../assets/videos/nodos.mp4";
import antinodos from "../assets/videos/antinodos.mp4";
import polarizacion from "../assets/videos/polarizacion.mp4";
import selloOculto1 from "../assets/videos/selloOculto.mp4";
import selloOculto2 from "../assets/videos/sellosOcultos.mp4";
import fluorescencia from "../assets/videos/fluorescencia.mp4";

const Ondas = () => {
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
              Def: Conjunto de muchos osciladores
            </small>
            <h1 className="text-7xl font-semibold text-center mb-5">
              Las Ondas <br />
            </h1>

            <div className="flex gap-2">
              <div className="relative flex flex-col">
                <img
                  className="absolute w-50 h-30 -top-115 left-25"
                  src={tresNodos}
                  alt="Tres nodos"
                />
                <video
                  src={tresCuerdas}
                  className="absolute w-70 h-40 -top-80 -left-15 mb-4"
                  loop
                  muted
                  autoPlay
                  playsInline
                />

                <video
                  src={cuerdaOnda}
                  className="absolute w-70 top-0 left-30 my-4"
                  loop
                  muted
                  autoPlay
                  playsInline
                />

                <video
                  src={ondasObstaculos}
                  className="absolute w-60 -top-84 left-60 my-4"
                  loop
                  muted
                  autoPlay
                  playsInline
                />

                <video
                  src={cuerdaDirecciones}
                  className="absolute w-40 top-0 -left-15 my-4"
                  loop
                  muted
                  autoPlay
                  playsInline
                  alt="Experimentando el efecto de resonancia con dos masas oscilando"
                />

                <img
                  className="absolute h-30 top-50 left-31"
                  src={vibracionOndas}
                />

                <p
                  className="text-[.9rem] text-amber-50"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Experimentando el efecto de resonancia con dos masas oscilando
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full bg-amber-50 text-black py-4 px-10">
          <div className="flex flex-col items-center justiy-center w-full h-[85%]">
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
                ¿Qué es una onda?
              </p>

              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[2rem] opacity-75 text-center text-center"
              >
                ¿Qué es la superposición de ondas?
              </p>

              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[1rem] opacity-75 text-center"
              >
                ¿Cómo se cambia la velocidad de propagación de una onda?
              </p>

              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[3rem] opacity-75 text-center"
              >
                ¿Qué son las longitudes de onda?
              </p>

              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[1.5rem] opacity-75 text-center"
              >
                ¿Cuáles son los tres parámetros de los que dependen las ondas?
              </p>

              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[2rem] opacity-75 text-center"
              >
                ¿Qué son los nodos y antinodos?
              </p>

              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[1rem] opacity-75 text-center text-center"
              >
                ¿Por qué medio se propaga la luz?
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
            <div className="mt-[10%] flex flex-col justify-center items-center">
              <RetroVideo
                containerWidth="80%"
                video={cuerdaDirecciones}
                width="100%"
                height="350px"
                caption="Ondas Manifestandose"
              />

              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[80%] text-3xl font-regular mt-5"
              >
                Una <span className="font-bold text-red-500">onda</span> es el
                susurro del universo que lleva energía sin tocar la materia.
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">2</span>
        </div>

        <div className="relative flex w-full h-full bg-amber-50 text-black p-8">
          <div className="absolute bottom-24 flex w-80 h-fit flex-col bg-amber-500 text-black px-5 py-4 rounded gap-4">
            <span className="text-2xl font-bold">Nota:</span>
            <p className="text-[.9rem] font-regular">
              Cabe aclarar que el medio por el cual se propaga la onda es
              también junto con su perturbador son también factores
              fundamentales a tener en cuenta.
              <br />
              <br />
              Ya sea el medio una cuerda, el aire, el agua, el vacio, etc y el
              perturbador una mano, una llave, una pared, etc.
            </p>
          </div>
          <div className="relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="flex flex-col justify-center items-center">
              <h2
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[80%] text-xl font-regular mt-5"
              >
                Las Ondas dependen de tres variables fundamentales:
              </h2>

              <div className="mt-5 flex gap-10">
                <div className="flex flex-col items-center">
                  <img className="w-24 h-22" src={amortiguacion} alt="" />
                  <h3
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    className="text-center w-[80%] text-[.9rem] font-bold mt-5"
                  >
                    Amortiguación
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <img className="w-24 h-22" src={tension} alt="" />
                  <h3
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    className="text-center w-[80%] text-[.9rem] font-bold mt-5"
                  >
                    Tensión
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <img className="w-24 h-22" src={frontera} alt="" />
                  <h3
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    className="text-centerw-[80%] text-[.9rem] font-bold mt-5"
                  >
                    Tipo de Fronteras
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute bottom-[2%] left-[5%] text-xl">3</span>
        </div>

        <div className="relative flex w-full h-full bg-amber-50 text-black p-8">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />

          <div className="mt-[10%] relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="flex flex-col justify-center items-center">
              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[80%] text-3xl font-regular mt-5 text-center"
              >
                Una onda puede ser rápida o lenta, pero no por voluntad propia:
                el calor, la rigidez y la densidad del{" "}
                <span className="font-bold text-orange-500">medio</span> son
                quienes le marcan el ritmo.
              </h2>
            </div>
            <RetroVideo
              video={velocidadOnda}
              className="grow-2"
              loop
              width="100%"
              height="200px"
              muted
              autoPlay
              playsInline
              caption="Medio de propagacion de la onda: Agua"
            />
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">4</span>
        </div>

        <div className="relative flex w-full h-full bg-amber-50 text-black p-8">
          <div className="mt-[10%] relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="flex flex-col justify-center items-center">
              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[90%] text-4xl mb-5 font-bold mt-5 text-center"
              >
                Los <span className="font-bold text-orange-500">nodos</span> son
                silencios en el canto de la onda. Los{" "}
                <span className="font-bold text-orange-500">antinodos</span>, su
                grito.
              </h2>

              <RetroVideo
                video={antinodos}
                loop
                containerWidth="90%"
                width="fit"
                containerHeight="fit"
                muted
                autoPlay
                playsInline
              />

              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[90%] text-3xl mb-5 font-regular mt-5"
              >
                Un nodo en el sonido seria{" "}
                <span className="font-bold text-purple-500">silencio</span>, un
                antinodo es mucho sonido.
                <br />
                <br />
                Un nodo en las ondas electromagnéticas es{" "}
                <span className="font-bold text-blue-500">oscuridad</span>, un
                antinodo un punto brillante.
                <br />
                <br />
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] left-[5%] text-xl">5</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />
          <div className="relative flex w-full h-[100%] px-5">
            <div className="flex flex-col items-center">
              <LightBulb />

              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="relative top-[65%] w-[80%] text-3xl font-regular mt-5"
              >
                La luz{" "}
                <span className="font-bold text-teal-500">
                  {" "}
                  no necesita caminos físicos para moverse.{" "}
                </span>{" "}
                Ella viaja sola, a través del vacío.
                <br />
                <br />
                La luz baila a diferentes ritmos, y a cada ritmo lo llamamos{" "}
                <span className="font-bold text-red-500">c</span>
                <span className="font-bold text-orange-500">o</span>
                <span className="font-bold text-fuchsia-500">l</span>
                <span className="font-bold text-green-500">o</span>
                <span className="font-bold text-blue-500">r</span>.
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">6</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black">
          <div className="-mt-40 flex w-full h-[100%] px-5">
            <div className=" flex flex-col items-center justify-center">
              <RetroVideo
                video={polarizacion}
                loop
                containerWidth="50%"
                width="fit"
                muted
                autoPlay
                playsInline
              />

              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[70%] text-3xl font-regular text-black -mt-64 text-center"
              >
                La luz vibra en todas direcciones, pero al{" "}
                <span className="font-bold text-red-500">Polarizarse</span>,
                elige un solo camino
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] left-[5%] text-xl">7</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />

          <div className="-mt-40 flex w-full h-[100%] px-5">
            <div className="w-full flex flex-col items-center justify-center">
              <RetroVideo
                video={selloOculto2}
                loop
                containerWidth="300px"
                containerHeight="300px"
                height="100%"
                muted
                autoPlay
                playsInline
              />

              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className=" w-[70%] text-3xl font-regular text-black -mt-84 text-center"
              >
                Hay secretos que solo un cristal agrietado puede revelar. Bajo
                su mirada torcida, la luz cuenta verdades que el ojo desnudo no
                podría imaginar.
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">8</span>
        </div>

        <div className="relative flex w-full h-full bg-amber-50 text-black p-8">
          <div className="mt-[10%] relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="flex flex-col justify-center items-center">
              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[90%] text-3xl font-regular m-5 text-center"
              >
                Lo invisible se vuelve visible cuando la luz correcta lo toca.
                La{" "}
                <span className="font-bold text-green-400">fluorescencia</span>{" "}
                es el lenguaje secreto entre la materia y la luz.
              </h2>

              <RetroVideo
                video={fluorescencia}
                className="grow-2"
                loop
                width="100%"
                height="200px"
                muted
                autoPlay
                playsInline
              />
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">4</span>
        </div>

        <div className="relative flex w-full h-full bg-amber-50 text-black p-8">
        <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />
          <div className="mt-[10%] relative flex justify-center items-center w-full h-[85%] px-5">
            <div className="flex flex-col justify-center items-center">
              <div className="flex gap-5">

              <RetroImage image={prisma} 
              containerWidth="50%"
              containerHeight="50%"
              />

              <RetroImage image={difraccion}
              containerWidth="50%"
              containerHeight="50%" />

              </div>

              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[90%] text-3xl font-regular m-5 text-center"
              >
                La <span className="font-bold text-amber-700"> difracción</span> es la respuesta luminosa cuando el mundo intenta ponerle límites a la claridad.
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">4</span>
        </div>

        <div className="flex w-full h-full bg-amber-50 text-black">
          <div className="relative flex w-full h-[100%] px-5">
            <div className="px-10 relative flex flex-col items-center justify-center">
              <DrumKit classe={"-mt-35"} />

              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-fit text-3xl font-regular text-black -mt-44 text-center"
              >
                Una{" "}
                <span className="font-bold text-amber-500">onda sonora</span> es
                la manera en que el aire recuerda nuestras palabras
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">
            Ultima
          </span>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Ondas;
