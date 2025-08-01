import React from 'react'

const RetroImage = ({ containerWidth, containerHeight = "fit-content", className="object-cover", image, width, height, caption, border = "none", rotate = "0" }) => {
  return (
    <div
      style={{ width: containerWidth, height: containerHeight, border: border, transform: `rotate(${rotate})` }}
      className="bg-white p-2 shadow-md flex flex-col items-center justify-start"
    >
      <img
        src={image}
        alt={caption}
        style={{ width: width, height: height }}
        className={className}
        loading="lazy"
      />
      <div className="mt-2 text-center font-mono text-lg  tracking-wide">{caption}
      </div>
    </div>
  )
}

export default RetroImage
