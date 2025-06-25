import Draggable from "react-draggable";
import { useRef } from "react";
import React from "react";

const DraggableCard = ({ title, content, draggable = false, className = ""}) => {
  const nodeRef = useRef(null);

  const card = (
    <div
      ref={nodeRef}
      style={{ fontFamily: "Montserrat, sans-serif" }}
      className={`cursor-pointer bg-white border border-[#868282] w-[250px] h-fit flex flex-col items-center justify-center pt-3 pb-5 px-5 rounded-xl ${className}`}
    >
      <div className="flex border border-[#1e1e1e] py-1 mb-3 justify-center items-center w-[200px] bg-[#1e1e1e] rounded-full">
        <p className="text-lg text-white text-center">{title}</p>
      </div>
      <p className="w-full text-[0.8rem] text-center">{content}</p>
    </div>
  );

  return draggable ? 
  (<Draggable bounds="parent" nodeRef={nodeRef}>{card}</Draggable>) : (card);
};

export default DraggableCard;
