import React from "react";
import { useEffect, useRef } from "react";
import transitionSound from "../assets/audio/audio1.mp3";
import HTMLFlipBook from "react-pageflip";

// COMPONENTES
import BackButton from "../components/BackButton";
import NoiseBackground from "../components/NoiseBackground";
import DraggableCard from "../components/DraggableCard";
import RetroImage from "../components/RetroImage";
import RetroVideo from "../components/RetroVideo";
import NextButton from "../components/NextButton";

// IMAGENES
import taipeiReal from "../assets/images/taipei101.webp";
import taipeiBoceto from "../assets/images/amortiguadorTaipeiDibujo.webp";
import disenoPuente from "../assets/images/disenoPuentes.webp";
import resorte from "../assets/images/resorte.jpeg";

// VIDEOS
import copaVoz from "../assets/videos/copaRota.mp4";
import copa from "../assets/videos/copa.mp4";
import cancelacionRuido from "../assets/videos/cancelacionRuido.mp4";
import arenaVideo from "../assets/videos/arenaVibracion.mp4";
import cuerdaLuz from "../assets/videos/cuerdaLuz.mp4";
import penduloMontaje from "../assets/videos/penduloMontaje.mp4";
import segundoModo from "../assets/videos/segundoModo.mp4";
import profe from "../assets/videos/oscilacionAmortiguada.mp4";
import tacoma from "../assets/videos/tacoma.mp4";
import puenteMilenio from "../assets/videos/puenteMilenio.mp4";
import argollado from "../assets/images/anillado.webp";
import amortiguadorVideo from "../assets/videos/amortiguador.mp4";
import faseVideo from "../assets/videos/faseVideo.mp4";

function SistemasOscilantes() {
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <NoiseBackground />
      <BackButton />

      <NextButton page="/laboratorios-oscilantes" />

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
            {/* <small className="bg-black text-white text-lg font-semibold px-3 rounded-full mt-6 mb-4 ">
              Laboratorio 1
            </small> */}
            <h1 className="text-5xl font-semibold text-center">
              Sistemas Oscilantes
            </h1>
            <p className="m-4 italic text-2xl font-light text-center">
              “El sistema oscilante más básico para la vida es el corazón”—
              Profesor Orlando Organista
            </p>
            <div className="flex gap-5">
              <div className="flex flex-col">
                <RetroVideo
                  video={faseVideo}
                  className="mb-4"
                  loop
                  muted
                  autoPlay
                  playsInline
                  alt="Experimento de oscilación donde se ve la fase"
                  caption="La Fase es coordinación de la que vibra"
                />
              </div>

              <div className="flex flex-col">
                <RetroVideo
                  video={profe}
                  className="mb-4"
                  loop={true}
                  muted={true}
                  autoPlay={true}
                  controls={false}
                  alt="profesor de fisica"
                  caption="La amortiguación es suavidad en el movimiento"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full h-full bg-amber-50 text-black py-4 px-10">
          <h2
            style={{ fontFamily: "Caveat, sans-serif" }}
            className="mt-10 text-3xl font-bold text-center"
          >
            ¿Por qué estudiarlos?
          </h2>

          <div className="mt-5 flex flex-col w-full h-[85%]">
            <div className="w-full">
              <RetroVideo
                containerWidth="95%"
                video={tacoma}
                width="95%"
                height="220px"
                caption="Colapso del Puente Tacoma Narrows"
                border="1px solid #D4CFCF"
              />
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[1rem] opacity-90"
              >
                La <strong className="underline">resonancia</strong> es el
                pálpito de lo uno con lo otro, es tan poderosa que puede ser
                fatal: Como se ve en el colapso del puente Tacoma.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-7 w-full">
              <RetroVideo
                containerWidth="80%"
                video={puenteMilenio}
                width="95%"
                height="200px"
                muted={true}
                caption="Puente Millenium Oscilando"
                border="1px solid #D4CFCF"
              />
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[90%] mt-5 text-[1rem] opacity-90"
              >
                La conexión de lo uno con lo otro puede ser tan potente que es capaz de hacer un puente tambalear unicamente por estar en <strong className="underline">sincronía</strong>.
              </p>
            </div>
          </div>

          <span className="absolute bottom-[2%] left-[5%] text-xl">1</span>
        </div>

        <div className="relative flex justify-center items-center w-full h-full bg-amber-50 text-black p-8">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />

          <div className="flex flex-col w-full h-[85%] px-5">
            <div className="flex flex-col items-center w-full">
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-full my-5 text-xl opacity-90 text-center"
              >
                Los <strong>amortiguadores</strong> son sistemas que evitan la fatalidad de la resonancia.
              </p>

              <RetroImage
                containerWidth="80%"
                image={taipeiBoceto}
                width="95%"
                height="240px"
                caption="Amortiguador de masa sintonizada del Taipei 101"
                border="1px solid #D4CFCF"
              />
            </div>

            <div className="flex items-center mt-7 5 w-full">
              <div className="flex items-center gap-5 w-full">
                <RetroImage
                  containerWidth="40%"
                  image={taipeiReal}
                  width="95%"
                  height="240px"
                  caption="Rascacielos Taipei 101"
                  border="1px solid #D4CFCF"
                />

                <RetroVideo
                  containerWidth="80%"
                  video={amortiguadorVideo}
                  width="95%"
                  height="220px"
                  caption="Video de su Amortiguador"
                  border="1px solid #D4CFCF"
                />
              </div>
            </div>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">2</span>
        </div>


        <div className="relative justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />
          <div className=" flex items-center flex-col gap-4 pt-15 w-full h-[85%] px-5">
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="w-full mb-4 text-[1rem] opacity-90"
            >
              La magia de las ondas sonoras y una vez mas de la resonancia hace que un simple sonido sea capaz de quebrar copas y cristales.
            </p>

            <RetroVideo
              containerWidth="70%"
              video={copaVoz}
              width="95%"
              height="200px"
              caption="Copa rota con la voz"
              border="1px solid #D4CFCF"
              muted={false}
              controls={true}
              loop={false}
              autoPlay={false}
            />

            <RetroVideo
              containerWidth="70%"
              video={copa}
              width="90%"
              height="200px"
              caption="Copa rota con sonido"
              border="1px solid #D4CFCF"
              muted={false}
              controls={true}
              loop={false}
              autoPlay={false}
            />
          </div>
          <span className="absolute bottom-[2%] left-[5%] text-xl">3</span>
        </div>

      
        <div className="relative items-center w-full h-full bg-amber-50 text-black p-4">
          <div className="relative w-full h-full px-5">
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="font-bold text-center w-full mt-14 text-[1rem] opacity-90"
            >
              ORDENE Y LEA LOS CONCEPTOS
            </p>
            <DraggableCard
              draggable={true}
              title="Resonancia"
              content="Cuando una fuerza externa tiene la misma frecuencia que la natural de un sistema, sus oscilaciones aumentan significativamente. Puede causar efectos útiles, como amplificar sonido, o peligrosos, como destruir estructuras."
              className="absolute top-[30%] left-[30%]"
            />
            <DraggableCard
              draggable={true}
              title="Oscilaciones"
              content="Movimiento repetitivo de un sistema respecto a un punto de equilibrio. Puede ser periódico o amortiguado dependiendo de si hay pérdida de energía o no."
              className="absolute top-[32%] left-[20%]"
            />
            <DraggableCard
              draggable={true}
              title="Periodo"
              content="Tiempo que tarda un sistema en completar una oscilación completa. Se mide en segundos y es inversamente proporcional a la frecuencia."
              className="absolute top-[34%] left-[38%]"
            />
            <DraggableCard
              draggable={true}
              title="Frecuencia"
              content="Número de oscilaciones que ocurren en un segundo. Se mide en hercios (Hz) y se relaciona con el periodo por la fórmula: f = 1/T."
              className="absolute top-[36%] left-[22%]"
            />
            <DraggableCard
              draggable={true}
              title="Sistema oscilante"
              content="Conjunto físico que oscila al ser perturbado desde su estado de equilibrio. Ejemplos: un péndulo, un resorte con masa o una cuerda vibrante."
              className="absolute top-[38%] left-[36%]"
            />

            <DraggableCard
              draggable={true}
              title="Oscilaciones forzadas (con amortiguamiento)"
              content="Oscilaciones que reciben energía externa periódica para mantenerse activas. Pueden alcanzar resonancia si la frecuencia de la fuerza coincide con la natural del sistema."
              className="absolute top-[34%] left-[38%]"
            />
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">4</span>
        </div>
        <div className="relative flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />

          <div className="flex flex-col pt-5 w-full h-full px-5">
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="font-bold text-center w-full mt-14 text-[1rem] opacity-90"
            >
              ORDENE Y LEA LOS CONCEPTOS
            </p>

            <DraggableCard
              draggable={true}
              title="Oscilaciones amortiguadas (sin forzamiento)"
              content="Movimiento en el que la energía del sistema disminuye progresivamente, reduciendo la amplitud con el tiempo, debido a fricción o resistencia interna."
              className="absolute top-[30%] left-[30%]"
            />
            <DraggableCard
              draggable={true}
              title="Oscilaciones Ideales"
              content="Movimiento oscilatorio sin pérdida de energía, donde la amplitud se mantiene constante indefinidamente. Es un modelo teórico sin fricción ni resistencia."
              className="absolute top-[32%] left-[20%]"
            />

            <DraggableCard
              draggable={true}
              title="Amplitud"
              content="Máxima distancia desde la posición de equilibrio hasta el punto más alejado del movimiento oscilante. Representa la energía inicial del sistema."
              className="absolute top-[36%] left-[22%]"
            />
            <DraggableCard
              draggable={true}
              title="Rigidez (constante k)"
              content="Medida de la resistencia que opone un sistema elástico a la deformación. En resortes, se expresa como la relación entre fuerza aplicada y elongación."
              className="absolute top-[38%] left-[36%]"
            />
            <DraggableCard
              draggable={true}
              title="Fase"
              content="Estado del movimiento oscilatorio en un momento dado, relacionado con el ángulo en el ciclo. Permite comparar dos oscilaciones simultáneas."
              className="absolute top-[40%] left-[30%]"
            />

            <DraggableCard
              draggable={true}
              title="Interferencia destructiva"
              content="Fenómeno que ocurre cuando dos ondas se superponen con fases opuestas, cancelándose entre sí parcial o totalmente. El resultado es una disminución de la amplitud total. Es el principio que permite, por ejemplo, la cancelación de ruido en audífonos."
              className="absolute top-[30%] left-[30%]"
            />

            <DraggableCard
              draggable={true}
              title="Oscilador"
              content="Elemento individual de un sistema que repite un movimiento periódico. Puede ser mecánico, eléctrico o incluso biológico, como las cuerdas vocales."
              className="absolute top-[40%] left-[30%]"
            />
          </div>

          <span className="absolute bottom-[2%] left-[5%] text-xl">5</span>
        </div>

        <div className="relative flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          <div className="flex flex-col pt-5 w-full h-full px-5">
            <p
              style={{ fontFamily: "Caveat, sans-serif" }}
              className="mt-5 text-3xl font-bold text-center"
            >
              Zona de Experimentación
            </p>

            <div
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-5 flex flex-col gap-4"
            >
              <p className="text-center text-lg font-semibold">
                Experimenta el sistema oscilante del Péndulo
              </p>
              <iframe
                src="https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_es.html"
                width="100%"
                height="300"
                loading="eager"
                // loading eager makes the iframe render even if its hidden in a HTMLFlipBook page
              ></iframe>
            </div>

            <div
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="mt-5 flex flex-col gap-4"
            >
              <p className="text-center text-lg font-semibold">
                Experimenta el sistema oscilante masa-resorte
              </p>
              <iframe
                src="https://phet.colorado.edu/sims/html/masses-and-springs-basics/latest/masses-and-springs-basics_es.html"
                width="100%"
                height="300"
                loading="eager"
                // loading eager makes the iframe render even if its hidden in a HTMLFlipBook page
              ></iframe>
            </div>
          </div>

          <span className="absolute bottom-[2%] left-[5%] text-xl">7</span>
        </div>

        <div className="relative flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />

          <div className="flex flex-col pt-5 w-full h-full px-5">
            <p
              style={{ fontFamily: "Caveat, sans-serif" }}
              className="mt-5 text-3xl font-bold text-center"
            >
              Evaluación de Aprendizaje
            </p>
            <iframe
              className="mt-5"
              allow="fullscreen; autoplay; allow-top-navigation-by-user-activation"
              allowfullscreen
              width="100%"
              height="690"
              frameborder="0"
              src="https://www.educaplay.com/game/24439628-conceptos_de_los_sistemas_oscilantes.html"
              muted
            ></iframe>
          </div>

          <span className="absolute bottom-[2%] right-[5%] text-xl">8</span>
        </div>

        <div className="flex justify-center items-center w-full h-full bg-amber-50 text-black py-4 px-10"></div>
      </HTMLFlipBook>
      {/* MODIFICARLO POR EL AUDIO DEL PROFESOR: <audio ref={audioRef} src={transitionSound} hidden /> */}
    </div>
  );
}

export default SistemasOscilantes;
