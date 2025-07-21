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

// IMAGENES
import tresNodos from "../assets/images/tresNodos.jpeg";
import argollado from "../assets/images/anillado.webp";
import frontera from "../assets/images/frontera.png";
import amortiguacion from "../assets/images/suspension.png";
import tension from "../assets/images/tension.png";
import longitudOnda from "../assets/images/longitudDeOnda.png";

// VIDEOS
import tresCuerdas from "../assets/videos/tresCuerdas.mp4";
import cuerdaOnda from "../assets/videos/cuerdaOnda.mp4";
import ondasObstaculos from "../assets/videos/ondasConObstaculos.mp4";
import cuerdaDirecciones from "../assets/videos/cuerdaDistintasDirecciones.mp4";
import vibracionOndas from "../assets/images/vibracionesOndas.jpeg";
import velocidadOnda from "../assets/videos/velocidadOnda.mp4";
import nodos from "../assets/videos/nodos.mp4";
import antinodos from "../assets/videos/antinodos.mp4";

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
                caption="Ondas en cuerda"
              />

              <h2
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[80%] text-[1rem] font-regular mt-5"
              >
                En el video observamos dos <strong>ondas</strong> propagandose
                por medio de la cuerda.
                <br />
                <br />
                El profesor mueve la cuerda verticalmente y el compañero
                horizontalmente.
                <br />
                <br />
                Una <strong>onda</strong> es un movimiento que transporta
                energía sin mover materia, como cuando el sonido viaja por el
                aire o el agua vibra al lanzar una piedra.
              </h2>
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">2</span>
        </div>

        <div className="relative flex w-full h-full bg-amber-50 text-black p-8">
          <div className="absolute bottom-24 flex w-80 h-fit flex-col bg-amber-500 text-black px-5 py-4 rounded gap-4">
            <span className="text-2xl font-bold">Nota:</span>
            <p className="text-[.9rem] font-regular">
              Cabe aclarar que el medio por el cual se propaga la onda es también junto con su perturbador son también factores fundamentales a tener en cuenta.
              <br /><br />Ya sea el medio una cuerda, el aire, el agua, el vacio, etc y el perturbador una mano, una llave, una pared, etc.
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
                ¿Cómo se cambia la velocidad de propagación de las ondas?
              </h2>

              <h2
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[80%] text-[.9rem] font-regular mt-5"
              >
                La velocidad de una onda depende del medio por el que viaja. Cambia si cambian las propiedades del medio, como su densidad o elasticidad.<br /><br />Por ejemplo, el sonido viaja más rápido en sólidos que en gases. También influye la temperatura: más calor, mayor velocidad en algunos casos.
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
          <div className="relative flex flex-col mt-15 w-full h-[85%] px-5">
            <div className="flex flex-col justify-center items-center">
              <h2
                style={{ fontFamily: "Caveat, sans-serif" }}
                className="w-[80%] text-3xl font-regular mb-6 text-center"
              >
                Conceptos Importantes de las Ondas
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <RetroVideo
                  video={nodos}
                  loop
                  containerWidth="40%"
                  width="100%"
                  height="200px"
                  muted
                  autoPlay
                  playsInline
                  caption="Longitudes De Onda" />

                <RetroImage
                  image={longitudOnda}
                  containerWidth="70%"
                  width="100%"
                  height="200px"
                  caption="Normalmente se usa λ para representar estas longitudes"
                />
              </div>


              <div className="flex items-center gap-4">
                <RetroVideo
                  video={antinodos}
                  loop
                  containerWidth="40%"
                  width="100%"
                  height="200px"
                  muted
                  autoPlay
                  playsInline
                  caption="Nodos y Antinodos" />

                <h2
                  style={{ fontFamily: "Caveat, sans-serif" }}
                  className="w-[80%] text-xl font-regular mb-6"
                >
                    Los <span className="font-bold text-green-400">nodos</span> son puntos fijos donde la onda no vibra, y los <span className="font-bold text-green-400">
                    antinodos </span> son los puntos donde la vibración es máxima. <br/> <br/> Ambos aparecen en <span className="font-bold text-yellow-400 underline">ondas estacionarias</span>, como en una cuerda tensa, mostrando zonas sin movimiento y zonas con mayor oscilación.
                </h2>
              </div>
            </div>
          </div>
          <span className="absolute bottom-[2%] left-[5%] text-xl">5</span>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Ondas;
