import React from "react";
import { useEffect, useRef } from "react";
import transitionSound from "../assets/audio/audio1.mp3";
import HTMLFlipBook from "react-pageflip";
import BackButton from "../components/BackButton";
import profe from "../assets/videos/oscilacionAmortiguada.mp4";
import NoiseBackground from "../components/NoiseBackground";
import RetroImage from "../components/RetroImage";
import RetroVideo from "../components/RetroVideo";

import taipeiReal from "../assets/images/taipei101.jpg";
import taipeiBoceto from "../assets/images/amortiguadorTaipeiDibujo.png";
import disenoPuente from "../assets/images/disenoPuentes.jpg";
import resorte from "../assets/images/cartilla1-materiales/resortes.jpg";
import regla from "../assets/images/cartilla1-materiales/regla.webp";
import juegoMasas from "../assets/images/cartilla1-materiales/juegoMasas.webp";
import cronometro from "../assets/images/cartilla1-materiales/cronometro.png";
import excel from "../assets/images/cartilla1-materiales/excel.jpg";
import hilo from "../assets/images/cartilla1-materiales/hilo.avif";
import soporteUniversal from "../assets/images/cartilla1-materiales/soporteUniversal.jpg";

import cancelacionRuido from "../assets/videos/cancelacionRuido.mp4"
import penduloMontaje from "../assets/videos/penduloMontaje.mp4";
import tacoma from "../assets/videos/tacoma.mp4";
import puenteMilenio from "../assets/videos/puenteMilenio.mp4";
import argollado from "../assets/images/anillado.png";
import amortiguadorVideo from "../assets/videos/amortiguador.mp4";

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
            <p className="mt-4 italic text-2xl font-light text-center">
              “El sistema oscilante más básico para la vida es el corazón”—
              Profesor Orlando Organista
            </p>
            <video
              src={profe}
              className="mt-10 w-[250px] h-[300px]"
              loop
              muted
              autoPlay
              playsInline
              alt="profesor de fisica"
            />
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
                className="w-[95%] mt-5 text-[1rem] opacity-45"
              >
                La falta de comprensión de la{" "}
                <strong className="underline">resonancia</strong> provocó el
                colapso del puente de Tacoma. Un ejemplo claro de cómo la
                oscilación mal entendida puede ser fatal.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-7 w-full">
              <RetroImage
                containerWidth="80%"
                image={disenoPuente}
                width="95%"
                height="200px"
                caption="Diseño de puentes Colgantes Modernos"
                border="1px solid #D4CFCF"
                rotate="-3deg"
              />
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[1rem] opacity-45"
              >
                Comprender los{" "}
                <strong className="underline">sistemas oscilantes</strong> es
                crucial: un puente mal diseñado puede colapsar no por peso, sino
                por ritmo y resonancia.
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
                className="w-full my-5 text-[1rem] opacity-45"
              >
                Los principios de los sistemas oscilantes son fundamentales en
                el <strong>diseño de amortiguadores</strong> que protegen
                edificios como el Taipei 101, evitando colapsos al controlar
                vibraciones causadas por sismos, vientos u otros movimientos
                extremos.
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

        <div className="relative flex justify-center items-center w-full h-full bg-amber-50 text-black p-8">
          <div className="flex flex-col pt-5 w-full h-[85%] px-5">
            <div className="flex flex-col items-center w-full">
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-full mt-5 mb-4 text-[1rem] opacity-45"
              >
                El Puente Millennium, ubicado en Londres, experimentó fuertes oscilaciones en el año 2000 al coincidir el paso rítmico de los peatones con ráfagas de viento, generando un fenómeno de resonancia inesperado. Un recordatorio claro de por qué estudiar oscilaciones es vital en ingeniería.
              </p>

              <RetroVideo
                containerWidth="80%"
                video={puenteMilenio}
                width="95%"
                height="190px"
                caption="Puente Millenium Oscilando"
                border="1px solid #D4CFCF"
              />
            </div>

            <div className="flex items-center gap-6 mt-12 w-full">
              <RetroVideo
                containerWidth="70%"
                video={cancelacionRuido}
                width="95%"
                height="200px"
                caption="Cancelación de Ruido"
                border="1px solid #D4CFCF"
              />
              <p
                style={{ fontFamily: "Montserrat, sans-serif" }}
                className="w-[95%] mt-5 text-[1rem] opacity-45"
              >
                Los audífonos canceladores de ruido funcionan generando oscilaciones opuestas a las ondas externas. Este principio de <strong className="underline">interferencia destructiva</strong> permite silenciar el sonido mediante precisión física aplicada.
              </p>
            </div>

          </div>

          <span className="absolute bottom-[2%] left-[5%] text-xl">3</span>
        </div>

        <div className="relative justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />
          <div className=" flex flex-col pt-15 w-full h-[85%] px-5">
            <p
              style={{ fontFamily: "Times New Roman" }}
              className="text-[1rem] opacity-55"
            >
              sentido del desplazamiento, y varía constantemente mientras el
              sistema está en movimiento. La elongación es una forma directa de
              cuantificar cuán lejos está el sistema de su configuración estable
              en un instante dado.
              <br />
              <br />
              Otro concepto fundamental es el de rigidez, que expresa cuánta
              resistencia ofrece un sistema ante una deformación. En el caso de
              un resorte, esta propiedad se mide mediante una constante{" "}
              <code>k</code> que aparece en la ley de Hooke. Un resorte con alta
              rigidez (mayor <code>k</code>) se opone fuertemente al
              estiramiento y genera una fuerza restauradora mayor. Esta
              característica no solo influye en la facilidad con la que el
              sistema se deforma, sino también en su{" "}
              <em>ritmo de oscilación</em>: un sistema más rígido tenderá a
              oscilar más rápidamente que uno más flexible.
              <br />
              <br />
              Por último algo importante que hay que saber es que estos
              movimientos repetitivos pueden medirse con dos magnitudes clave:
              el periodo y la frecuencia. El periodo (T) es el tiempo que tarda
              el sistema en completar una oscilación completa, es decir, en ir y
              volver a su punto de inicio. Se mide en segundos y da una idea de
              la duración del ciclo oscilatorio. Por otro lado, la frecuencia
              (f) indica cuántas oscilaciones ocurren por segundo y se mide en{" "}
              <em>hercios</em> (Hz). Ambas magnitudes están inversamente
              relacionadas: a mayor frecuencia, menor es el periodo, y
              viceversa. Para modelar matemáticamente este tipo de movimiento,
              se han establecido fórmulas teóricas que permiten calcular el
              periodo de oscilación en distintos sistemas. En el caso de un
              péndulo simple, el periodo se determina mediante la fórmula:
              <code> T = 2π √(L / g) </code>, donde <code>L</code> es la
              longitud del hilo y <code>g</code> la aceleración debida a la
              gravedad.
              <br />
              <br />
              Por su parte, el periodo de un sistema masa-resorte está dado por
              la ecuación:
              <code> T = 2π √(m / k) </code>, en la que <code>m</code>{" "}
              representa la masa del objeto y <code>k</code> la constante de
              rigidez del resorte. Estas fórmulas permiten predecir el
              comportamiento dinámico de los sistemas oscilantes bajo
              condiciones ideales, es decir, sin amortiguamiento ni fuerzas
              externas perturbadoras.
            </p>
          </div>
          <span className="absolute bottom-[2%] right-[5%] text-xl">4</span>
        </div>

        <div className="flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          <h2
            style={{ fontFamily: "Caveat, sans-serif" }}
            className="mt-10 text-3xl font-bold text-center"
          >
            Materiales
          </h2>
          <div className="flex flex-col gap-4 pt-5 w-full h-[85%] px-5">
            <p
              style={{ fontFamily: "Times New Roman" }}
              className="text-[1rem] opacity-55"
            >
              Ahora sí, al momento de pasar a la práctica necesitamos los
              siguientes materiales:
              <br />
              <br />
            </p>
            <div className="-mt-7 justify-center flex gap-4">
              <RetroImage
                containerWidth="200px"
                containerHeight="200px"
                image={regla}
                width="180px"
                height="140px"
                caption="Regla"
              />
              <RetroImage
                containerWidth="200px"
                containerHeight="200px"
                image={resorte}
                width="180px"
                height="180px"
                caption="Resortes"
              />
            </div>

            <div className="flex justify-center gap-4">
              <RetroImage
                containerWidth="200px"
                containerHeight="200px"
                image={juegoMasas}
                width="180px"
                height="180px"
                caption="Juego de Masas"
              />
              <RetroImage
                containerWidth="200px"
                containerHeight="200px"
                image={cronometro}
                width="180px"
                height="180px"
                caption="Cronometro"
              />
              <RetroImage
                containerWidth="200px"
                containerHeight="200px"
                image={excel}
                width="180px"
                height="180px"
                caption="Excel"
              />
            </div>

            <div className="flex justify-center gap-4">
              <RetroImage
                containerWidth="200px"
                containerHeight="260px"
                image={soporteUniversal}
                width="180px"
                height="180px"
                caption="Soporte Universal"
              />
              <RetroImage
                containerWidth="200px"
                containerHeight="240px"
                image={hilo}
                width="180px"
                height="180px"
                caption="Hilo"
              />
            </div>
          </div>
          <span className="absolute bottom-[2%] left-[5%] text-xl">5</span>
        </div>

        <div className="relative justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />

          <h2
            style={{ fontFamily: "Caveat, sans-serif" }}
            className="mt-10 text-3xl font-bold text-center"
          >
            Metodología
          </h2>

          <div className="flex flex-col pt-5 w-full h-[85%] px-5">
            <p
              style={{ fontFamily: "Times New Roman" }}
              className="text-[1rem] opacity-55"
            >
              Durante el desarrollo del laboratorio, se aplicaron procedimientos
              similares en ambas pruebas experimentales, aunque con ciertas
              variaciones específicas según la naturaleza de cada sistema. A
              continuación, se describe detalladamente la metodología empleada
              en la primera parte, correspondiente al estudio del periodo de un
              péndulo.
              <br />
              <br />
              Para iniciar esta fase del experimento, se preparó el montaje
              utilizando un cordón, el cual fue fijado por un extremo a un
              soporte rígido y por el otro a una masa, formando así un péndulo.
              Una vez dispuesto el sistema, se procedió a liberar la masa desde
              una posición inicial que podemos conocer como configuracion de
              equilibrio. Después dejamos que el péndulo realizara diez
              oscilaciones completas, registrando con un cronómetro el tiempo
              total de este ciclo. Al finalizar, ese tiempo fue dividido entre
              diez con el objetivo de obtener el valor del periodo —una magnitud
              fundamental, ya que permite comparar cómo varía en función de
              diferentes parámetros.
            </p>

            <video
              src={penduloMontaje}
              loop
              muted
              autoPlay
              playsInline
              alt="profesor de fisica"
              className="mt-5 w-full h-75"
            />
            <small
              style={{ fontFamily: "Times New Roman" }}
              className="text-center text-[.8rem] mt-3 opacity-55"
            >
              Video de montaje del péndulo simple
            </small>
          </div>

          <span className="absolute bottom-[2%] right-[5%] text-xl">6</span>
        </div>

        <div className="flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          <div className="flex flex-col pt-5 w-full h-[85%] px-5">
            <p
              style={{ fontFamily: "Times New Roman" }}
              className="text-[1rem] opacity-55"
            >
              Con el propósito de determinar si el periodo depende de ciertas
              variables, se realizaron tres series de mediciones variando
              sistemáticamente la amplitud, la masa y la longitud del hilo.
              <br />
              <br />
              En primer lugar, para examinar la influencia de la amplitud, se
              mantuvieron constantes tanto la masa como la longitud del péndulo,
              mientras se modificaba el ángulo de lanzamiento. En cada caso, se
              repitió el procedimiento para hallar el periodo. Posteriormente,
              para evaluar el efecto de la masa, se utilizaron distintos cuerpos
              con diferentes pesos, asegurándose de conservar la misma longitud
              del hilo y el mismo ángulo inicial. Finalmente, en la última
              prueba, se analizó la influencia de la longitud modificando la
              distancia entre el soporte y la masa, manteniendo constante tanto
              la masa como el ángulo de oscilación.
            </p>
          </div>

          <span className="absolute bottom-[2%] left-[5%] text-xl">7</span>
        </div>

        <div className="relative flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          <img
            className="w-15 h-full absolute top-0 -left-10 "
            src={argollado}
            alt="decorative image"
          />

          <div className="flex flex-col pt-5 w-full h-[85%] px-5">
            <p
              style={{ fontFamily: "Times New Roman" }}
              className="text-[1rem] opacity-55"
            >
              Pagina 8
            </p>
          </div>

          <span className="absolute bottom-[2%] right-[5%] text-xl">8</span>
        </div>
      </HTMLFlipBook>
      <audio ref={audioRef} src={transitionSound} hidden />
    </div>
  );
}

export default SistemasOscilantes;
