import React, { useEffect } from 'react';
import ReactPannellum from "react-pannellum";
//import Carousel from '../Carousel';


  
function Panorama() {

  useEffect(() => {
    const addHotspot = () => {
        if (ReactPannellum.getCurrentScene() === "firstScene") {
            ReactPannellum.addHotSpot(
                {
                    pitch: 10,  //Vertical position (-90 to 90)
                    yaw: 10,    //Horizontal position (-180 to 180)
                    type: "info",
                    text: "Click me!", 
                    scale: 6.0,  //Size of hotspot
                },
                "firstScene"
            );
        }
    };

    // Wait for the scene to load before adding hotspots
    setTimeout(addHotspot, 500); // Small delay to ensure Pannellum loads

    }, []);

  const style={
      width: "100%",
      height: "700px",
      background: "#000000"
    };

  const config = {
      autoLoad: true,
      showControls: false,
    };
  

return (
  <div>

      <ReactPannellum
        id="1"
        sceneId="firstScene"
        config={config}
        imageSource="images/chapelPanorama.jpg"
        style={style}
      />





    
  </div>
);
};

export default Panorama;