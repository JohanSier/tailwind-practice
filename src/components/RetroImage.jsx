import React from 'react'

const RetroImage = ({ containerWidth, containerHeight, image, width, height, caption }) => {
  return (
    <div
      style={{ width: containerWidth, height: containerHeight }}
      className="bg-white p-2 shadow-md flex flex-col items-center justify-start"
    >
      <img
        src={image}
        alt={caption}
        style={{ width: width, height: height }}
        className="object-cover"
      />
      <div className="mt-2 text-center font-mono text-lg  tracking-wide">
        {caption}
      </div>
    </div>
  )
}

export default RetroImage
