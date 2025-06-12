import React, { useEffect, useState} from 'react'
import cursor from "../assets/cursores/cursor2.png";
import { useNavigate } from 'react-router-dom';

const Overlay = () => {
  const fullText = `Este proyecto ha sido creado como parte del curso Física 3 en la Universidad Central, con el propósito de presentar los temas estudiados en clase de una forma más didáctica, visual e interactiva.

A través de esta cartilla podrás explorar conceptos clave de la física óptica y las ondas, explicados de manera clara y acompañados de recursos visuales que hacen la experiencia más entretenida y significativa.`;

  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10500);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  
  const handleClick = () => {
    if (isVisible) {
      setIsFading(true);
    }
  };

  return (
    <main className={`w-full h-full flex items-center justify-center backdrop-blur-md transition-opacity duration-2000 ease-in-out ${
        isFading ? "opacity-0 hidden" : "opacity-100"
      }`} onMouseMove={handleMouseMove}
    onClick={handleClick}>

      <div className="h-80 bg-neutral-900 p-8 rounded-xl shadow-xl max-w-xl w-full font-light text-lg whitespace-pre-wrap drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        {typedText}
      </div>

      <span className={`${isVisible ? "absolute" : "hidden"} ease font-light bottom-20 right-35 block mr-3 text-right text-2xl animate-pulse `}>
        HAZ CLIC EN CUALQUIER LUGAR
        <br />
        PARA COMENZAR
      </span>

      {/* CURSOR */}
            <div
              className="fixed w-10 h-10 pointer-events-none z-50"
              style={{
                top: mousePos.y,
                left: mousePos.x,
                transform: "translate(-50%, -50%)",
              }}
            >
              <img src={cursor} alt="cursor" />
            </div>
    </main>
  )
}

export default Overlay
