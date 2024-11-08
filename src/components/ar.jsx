import React from 'react';

const ARViewer = () => {
  return (
    <a-scene embedded arjs>
      {/* Marker for detecting the Hiro marker */}
      <a-marker preset="hiro">
        <a-box position="0 0.5 0" material="color: yellow;"></a-box>
      </a-marker>

      {/* Camera for AR experience */}
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARViewer;
