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

// IMAGENES
import taipeiReal from "../assets/images/taipei101.webp";
import taipeiBoceto from "../assets/images/amortiguadorTaipeiDibujo.webp";
import disenoPuente from "../assets/images/disenoPuentes.webp";
import resorte from "../assets/images/cartilla1-materiales/resortes.webp";
import regla from "../assets/images/cartilla1-materiales/regla.webp";
import juegoMasas from "../assets/images/cartilla1-materiales/juegoMasas.webp";
import cronometro from "../assets/images/cartilla1-materiales/cronometro.webp";
import excel from "../assets/images/cartilla1-materiales/excel.webp";
import hilo from "../assets/images/cartilla1-materiales/hilo.avif";
import soporteUniversal from "../assets/images/cartilla1-materiales/soporteUniversal.webp";

// VIDEOS
import copaVoz from "../assets/videos/copaRota.mp4";
import copa from "../assets/videos/copa.mp4";
import cancelacionRuido from "../assets/videos/cancelacionRuido.mp4";
import penduloMontaje from "../assets/videos/penduloMontaje.mp4";
import profe from "../assets/videos/oscilacionAmortiguada.mp4";
import tacoma from "../assets/videos/tacoma.mp4";
import puenteMilenio from "../assets/videos/puenteMilenio.mp4";
import argollado from "../assets/images/anillado.webp";
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
                El Puente Millennium, ubicado en Londres, experimentó fuertes
                oscilaciones en el año 2000 al coincidir el paso rítmico de los
                peatones con ráfagas de viento, generando un fenómeno de
                resonancia inesperado. Un recordatorio claro de por qué estudiar
                oscilaciones es vital en ingeniería.
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
                Los audífonos canceladores de ruido funcionan generando
                oscilaciones opuestas a las ondas externas. Este principio de{" "}
                <strong className="underline">interferencia destructiva</strong>{" "}
                permite silenciar el sonido mediante precisión física aplicada.
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
          <div className=" flex items-center flex-col gap-4 pt-15 w-full h-[85%] px-5">
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="w-full mb-4 text-[1rem] opacity-45"
            >
              El estudio de los sistemas oscilantes es clave en el diseño de
              cristales resistentes. Conociendo su{" "}
              <strong className="underline">frecuencia natural</strong>, es
              posible evitar que coincida con ondas externas que generen
              resonancia, fenómeno que puede amplificar sus{" "}
              <strong className="underline">oscilaciones</strong> y provocar su
              fractura. Aplicando estos conceptos, se ajustan propiedades como
              el grosor, la forma o el material, logrando que los cristales
              disipen mejor la energía vibratoria y resistan condiciones
              extremas.
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
          <span className="absolute bottom-[2%] right-[5%] text-xl">4</span>
        </div>

        {/* <div className="flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
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
        </div> */}
        <div className="relative items-center w-full h-full bg-amber-50 text-black p-4">
          <div className="relative w-full h-full px-5">
            <p
              style={{ fontFamily: "Montserrat, sans-serif" }}
              className="font-bold text-center w-full mb-4 text-[1rem] opacity-45"
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
          <span className="absolute bottom-[2%] left-[5%] text-xl">5</span>
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
              className="font-bold text-center w-full mb-4 text-[1rem] opacity-45"
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

          <span className="absolute bottom-[2%] right-[5%] text-xl">6</span>
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
            ></iframe>
          </div>

          <span className="absolute bottom-[2%] right-[5%] text-xl">8</span>
        </div>
      </HTMLFlipBook>
      {/* MODIFICARLO POR EL AUDIO DEL PROFESOR: <audio ref={audioRef} src={transitionSound} hidden /> */}
    </div>
  );
}

export default SistemasOscilantes;
