import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import logouniversidad from '../assets/images/logouniversidad.png'
import flor from '../assets/images/flor.png'
import fuego from '../assets/images/fuego.png'
import reloj from '../assets/images/reloj.png'
import sonrisa from '../assets/images/sonrisa.png'
import estrella from '../assets/images/estrella.png'
import cohete from '../assets/images/cohete.png'
import bombilla from '../assets/images/bombilla.png'
import atomos from '../assets/images/atomos.png'
import cerebro from '../assets/images/cerebro.png'

const Home = () => {
    let date = new Date()

  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  const handleClick = () => {
    navigate('/cartilla'); // Adjust the path as needed
  };

  return (
    <main className='w-full h-full box-border relative'>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
        <defs>
          <filter id="squiggly-0">
            <feTurbulence baseFrequency="0.2" numOctaves="3" result="noise" seed="0" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-1">
            <feTurbulence baseFrequency="0.2" numOctaves="3" result="noise" seed="1" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>
          <filter id="squiggly-2">
            <feTurbulence baseFrequency="0.2" numOctaves="3" result="noise" seed="2" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
          <filter id="squiggly-3">
            <feTurbulence baseFrequency="0.2" numOctaves="3" result="noise" seed="3" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
          </filter>
          <filter id="squiggly-4">
            <feTurbulence baseFrequency="0.2" numOctaves="3" result="noise" seed="4" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
        </defs>
        <style>{`
          @keyframes squiggly-anim {
            0% { filter: url(#squiggly-0); }
            25% { filter: url(#squiggly-1); }
            50% { filter: url(#squiggly-2); }
            75% { filter: url(#squiggly-3); }
            100% { filter: url(#squiggly-4); }
          }

          .squiggly {
            animation: squiggly-anim 1.5s ease-in-out infinite;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }

          .float-1 {
            animation: float 2s ease-in-out infinite;
            animation-delay: 0s;
          }

          .float-2 {
            animation: float 3s ease-in-out infinite;
            animation-delay: 1s;
          }

          .float-3 {
            animation: float 3s ease-in-out infinite;
            animation-delay: 0.5s;
          }

          .float-4 {
            animation: float 2.2s ease-in-out infinite;
            animation-delay: 1.3s;
          }

          .float-5 {
            animation: float 3.8s ease-in-out infinite;
            animation-delay: 0.8s;
          }
        `}</style>
      </svg>
      <span className='text-xl'>“La luz es la mensajera del universo.”<br/> — James Clerk Maxwell</span>
      <span className='absolute top-0 right-0 block m-3 text-xl'>{date.toLocaleDateString('en-GB')}</span>
      
      <section className='relative w-full h-[85vh] flex flex-col justify-center items-center overflow-hidden '>
        <h1 className='text-6xl font-semibold'>Fisica 3 - Libro Digital</h1>
        <h2 className='text-3xl font-regular mt-4'> - Hecho Por - </h2>
        <h3 className='text-4xl font-semibold mt-4'>Johan Sierra</h3>
        <img className='w-40 mt-2' src={logouniversidad} alt="logo universidad central" />
        {/* IMPORTING MOVING ICONS */} 
        <div className='absolute top-0 left-0 w-full h-full squiggly'>
        <img className='w-15 absolute top-90 left-95 -rotate-15 float-1' src={reloj} alt="reloj" />
        <img className='w-15 absolute left-109 top-49 float-2' src={atomos} alt="atomos" />
        <img className='w-15 absolute left-162 top-47 -rotate-12 float-3' src={bombilla} alt="bombilla" />
        <img className='w-18 absolute left-220 top-47 rotate-15 float-4' src={cerebro} alt="cerebro" />
        <img className='w-18 absolute right-100 top-53 rotate-12 float-5' src={cohete} alt="cohete" />
        <img className='w-15 absolute right-95 top-90 -rotate-12 float-2' src={flor} alt="flor" />
        <img className='w-15 absolute right-131 top-100 -rotate-5 float-3' src={estrella} alt="estrella" />
        <img className='w-14 absolute top-136 left-186 rotate-10 float-1' src={sonrisa} alt="sonrisa" />
        <img className='w-15 absolute top-100 left-135 -rotate-15 float-4' src={fuego} alt="fuego" />
        </div>

      </section>

      <button
          onClick={handleClick}
          className="absolute bottom-10 right-10 animate-bounce text-6xl text-white"
        >
          ➡️
        </button>
    </main>
  )
}

export default Home
