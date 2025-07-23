import React from 'react';

const SketchfabHeartModel = () => {
  return (

    <div className="flex flex-col justify-center items-center w-full max-w-4xl mx-auto my-8">
      <div className=" w-80 h-100 relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl">
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          src="https://sketchfab.com/models/a70c0c47fe4b4bbfabfc8f445365d5a4/embed?autostart=1&preload=1&transparent=1&ui_hint=0&dnt=1"
        />
      </div>
    </div>
  );
};

export default SketchfabHeartModel;