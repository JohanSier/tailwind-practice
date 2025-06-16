import React from "react";
import { useEffect, useRef } from "react";
import transitionSound from "../assets/audio/audio1.mp3";
import HTMLFlipBook from "react-pageflip";
import BackButton from "../components/BackButton";
import profe from "../assets/videos/oscilacionAmortiguada.mp4";
import NoiseBackground from "../components/NoiseBackground";

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
            <small className="bg-black text-white text-lg font-semibold px-3 rounded-full mt-6 mb-4 ">
              Laboratorio 1
            </small>
            <h1 className="text-5xl font-semibold text-center">
              Sistemas Oscilantes
            </h1>
            <p className="mt-4 italic text-2xl font-light text-center">
              “La naturaleza está escrita en lenguaje matemático, y las
              oscilaciones son su pulso más delicado.”— Galileo Galilei{" "}
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

        <div className="flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          <h2
            style={{ fontFamily: "Caveat, sans-serif" }}
            className="mt-10 text-3xl font-bold text-center"
          >
            Contenido:
          </h2>

          <div className="flex flex-col items-center justify-center w-full h-[85%]">
            <small>Contenido</small>
          </div>

          <span className="absolute bottom-[2%] left-[5%] text-xl">1</span>
        </div>

        <div className="border-l-[3px] border-[#6969695d] shadow-inner flex justify-center items-center w-full h-full bg-amber-50 text-black p-8">
          <h2
            style={{ fontFamily: "Caveat, sans-serif" }}
            className="mt-10 text-3xl font-bold text-center"
          >
            Introducción
          </h2>

          <div className="flex flex-col pt-5 w-full h-[85%] px-5">
            <p style={{ fontFamily: "Lato, sans-serif" }} className="text-[1rem]">
              En nuestro primer laboratorio se analizaron dos sistemas oscilantes
              fundamentales: el péndulo simple y el sistema masa-resorte, con el
              propósito de estudiar y comprender el comportamiento de los
              movimientos oscilatorios en función de diversas variables físicas.
              <br />
              <br />
              El objetivo principal fue determinar el periodo de oscilación en
              ambos sistemas y observar cómo este se ve afectado (o no) por
              distintas condiciones iniciales. <br />
              <br />
              Para ello, se propuso responder de manera experimental a cuatro
              preguntas clave: <br />
              <br />
              1. ¿Depende el periodo de la amplitud inicial? <br />
              2. ¿Depende el periodo de la masa?
              <br />
              3. ¿Depende el periodo de la longitud de la cuerda? <br />
              4. ¿Depende el periodo de la rigidez del resorte?
            </p>
          </div>

          <span className="absolute bottom-[2%] right-[5%] text-xl">2</span>
        </div>

        <div className="border-l-[3px] border-[#6969695d] shadow-inner flex justify-center items-center w-full h-full bg-amber-50 text-black p-8">
          <h2
            style={{ fontFamily: "Caveat, sans-serif" }}
            className="mt-10 text-3xl font-bold text-center"
          >
            Marco Teórico 🧬
          </h2>
          <div className="flex flex-col pt-5 w-full h-[85%] px-5">
            <p style={{ fontFamily: "Lato, sans-serif" }} className="text-[1rem]">
              En el ámbito de la física, los sistemas oscilantes representan una de las formas más recurrentes de movimiento. Son aquellos sistemas que, tras ser desplazados de una posición de equilibrio, responden con un movimiento repetitivo debido a la presencia de una fuerza restauradora que actúa para devolverlos a su estado original. Este tipo de comportamiento se encuentra tanto en sistemas mecánicos simples como el <em>péndulo</em> o el <em>resorte con una masa</em>, como en fenómenos más complejos como las ondas sonoras o electromagnéticas.
              <br/><br/>
              Para entender cómo funcionan, debemos primero considerar qué es un oscilador. Un oscilador es cualquier objeto o componente físico capaz de realizar movimientos cíclicos alrededor de un punto de referencia. En el caso del péndulo, es la masa suspendida que se balancea; en el sistema masa-resorte, es la masa que sube y baja verticalmente.
              <br/><br/>
              Pero este concepto puede escalar: si pensamos en una cuerda o un medio elástico, cada partícula que forma parte de ese sistema puede comportarse como un oscilador individual.
              <br/><br/>
              Todo sistema de este tipo parte de lo que se conoce como configuración de equilibrio, que es la posición natural en la que el sistema permanece en reposo si no actúa ninguna fuerza externa. Esta posición de equilibrio es clave porque define el punto de referencia desde el cual se mide el desplazamiento del sistema cuando es perturbado.
              <br/><br/>
              Ese desplazamiento respecto al equilibrio se denomina elongación. Es una magnitud que puede ser positiva o negativa dependiendo del 
            </p>
          </div>

          <span className="absolute bottom-[2%] right-[5%] text-xl">3</span>
        </div>


        <div className="border-l-[3px] border-[#6969695d] shadow-inner justify-center items-center w-full h-full bg-amber-50 text-black p-4">

        <div className=" flex flex-col pt-15 w-full h-[85%] px-5">
            <p style={{ fontFamily: "Lato, sans-serif" }} className="text-[1rem]">
            sentido del desplazamiento, y varía constantemente mientras el sistema está en movimiento. La elongación es una forma directa de cuantificar cuán lejos está el sistema de su configuración estable en un instante dado.
              <br/><br/>
              Otro concepto fundamental es el de rigidez, que expresa cuánta resistencia ofrece un sistema ante una deformación. En el caso de un resorte, esta propiedad se mide mediante una constante <code>k</code> que aparece en la ley de Hooke. Un resorte con alta rigidez (mayor <code>k</code>) se opone fuertemente al estiramiento y genera una fuerza restauradora mayor. Esta característica no solo influye en la facilidad con la que el sistema se deforma, sino también en su <em>ritmo de oscilación</em>: un sistema más rígido tenderá a oscilar más rápidamente que uno más flexible.
            
              <br/><br/>
                Por último algo importante que hay que saber es que estos movimientos repetitivos pueden medirse con dos magnitudes clave: el periodo y la frecuencia. El periodo (T) es el tiempo que tarda el sistema en completar una oscilación completa, es decir, en ir y volver a su punto de inicio. Se mide en segundos y da una idea de la duración del ciclo oscilatorio.
            
                Por otro lado, la frecuencia (f) indica cuántas oscilaciones ocurren por segundo y se mide en <em>hercios</em> (Hz). Ambas magnitudes están inversamente relacionadas: a mayor frecuencia, menor es el periodo, y viceversa.
            </p>
          </div>
              <span className="absolute bottom-[2%] right-[5%] text-xl">4</span>
        </div>
        
        <div className="flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          Page 5
        </div>
        <div className="flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          Page 6
        </div>
        <div className="flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
          Page 7
        </div>
      </HTMLFlipBook>
      <audio ref={audioRef} src={transitionSound} hidden />
    </div>
  );
}

export default SistemasOscilantes;
