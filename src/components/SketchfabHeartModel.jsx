import React from 'react';

const SketchfabHeartModel = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="sketchfab-embed-wrapper relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-xl">
        <iframe 
          title="3D Animated Realistic Human Heart V1.0"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/a70c0c47fe4b4bbfabfc8f445365d5a4/embed"
        />
      </div>
      <p className="text-xs text-gray-600 mt-2 text-center">
        Modelo <a 
          href="https://sketchfab.com/3d-models/3d-animated-realistic-human-heart-v10-a70c0c47fe4b4bbfabfc8f445365d5a4" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          3D Animated Realistic Human Heart V1.0
        </a> por <a 
          href="https://sketchfab.com/docjana" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Anatomy by Doctor Jana
        </a> en <a 
          href="https://sketchfab.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default SketchfabHeartModel;