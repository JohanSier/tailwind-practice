import React from "react";
import { useEffect, useRef } from "react";
import HTMLFlipBook from "react-pageflip";

// COMPONENTES
import BackButton from "../components/BackButton";
import NoiseBackground from "../components/NoiseBackground";


// import DraggableCard from "../components/DraggableCard";
// import RetroImage from "../components/RetroImage";
import NextButton from "../components/NextButton";

// IMAGENES

// VIDEOS


function LaboratoriosOscilantes() {
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
                <div className="cursor-pointer flex justify-center items-center w-full h-full bg-amber-50 text-black p-4">
                    <span></span>
                    <div
                        style={{ fontFamily: "Caveat, sans-serif" }}
                        className=" w-full h-full flex flex-col items-center justify-center px-20"
                    >
                        


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

                            <p
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                                className="w-[95%] mt-5 text-[1rem] opacity-45"
                            >
                                Comprender los{" "}
                                <strong className="underline">Laboratorios oscilantes</strong> es
                                crucial: un puente mal diseñado puede colapsar no por peso, sino
                                por ritmo y resonancia.
                            </p>
                        </div>
                    </div>

                    <span className="absolute bottom-[2%] left-[5%] text-xl">1</span>
                </div>

                <div className="relative flex justify-center items-center w-full h-full bg-amber-50 text-black p-8">

                    <div className="flex flex-col w-full h-[85%] px-5">
                        <div className="flex flex-col items-center w-full">
                            <p
                                style={{ fontFamily: "Montserrat, sans-serif" }}
                                className="w-full my-5 text-[1rem] opacity-45"
                            >
                                Los principios de los Laboratorios oscilantes son fundamentales en
                                el <strong>diseño de amortiguadores</strong> que protegen
                                edificios como el Taipei 101, evitando colapsos al controlar
                                vibraciones causadas por sismos, vientos u otros movimientos
                                extremos.
                            </p>


                        </div>

                        <div className="flex items-center mt-7 5 w-full">
                            <div className="flex items-center gap-5 w-full">



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


                        </div>

                        <div className="flex items-center gap-6 mt-12 w-full">

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
            </HTMLFlipBook>
        </div>
    );
}

export default LaboratoriosOscilantes;
