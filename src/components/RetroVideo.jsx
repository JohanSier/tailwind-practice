import React from "react";

const RetroVideo = ({
  containerWidth,
  containerHeight = "fit-content",
  video,
  width,
  height,
  caption,
  border = "none",
  rotate = "0",
  muted = true,
  loop = true,
  autoPlay = true,
  controls = false
}) => {
  return (
    <div
      style={{ width: containerWidth, height: containerHeight, border: border, transform: `rotate(${rotate})` }}
      className="bg-white py-5 px-2 shadow-md flex flex-col items-center justify-start"
    >
      <video
        src={video}
        loop={loop}
        controls={controls}
        muted={muted}
        autoPlay={autoPlay}
        playsInline
        style={{ width: width, height: height }}
        className="object-cover"
      />
      <div className="mt-2 text-center font-mono text-xl  tracking-wide">
        <p className="w-full text-center">{caption}</p>
      </div>
    </div>
  );
};

export default RetroVideo;
