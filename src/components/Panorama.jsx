import React from 'react';
import ReactPannellum from "react-pannellum";
//import Carousel from '../Carousel';


function Panorama  () {

    const style={
        width: "1200px",
        height: "600px",
        background: "#000000"
      };

    const config = {
        autoLoad: true,
      };
    
    const hotspots=[{
            "pitch": 14.1,
            "yaw": 1.5,
            "type":"info",
            "text":"example hotspot"
    }];

  return (
    <div>
        <h1> Panorama </h1>
        <ReactPannellum
          id="1"
          sceneId="firstScene"
          config={config}
          imageSource="images/chapelPanorama.jpg"
          style={style}
          hotspots={hotspots}
        />





      
    </div>
  );
};

export default Panorama;