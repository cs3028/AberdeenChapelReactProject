import React, { useEffect, useState } from 'react';
import ReactPannellum from "react-pannellum";
import "./Panorama.css"; // Import the CSS file

//import Carousel from '../Carousel';


  
function Panorama() {

  const [stainedGlassPopupVisible, setStainedGlassPopupVisible] = useState(false);
  const [organPopupVisible, setOrganPopupVisible] = useState(false);

  useEffect(() => {
    const addHotspot = () => {
        if (ReactPannellum.getCurrentScene() === "firstScene") {
            ReactPannellum.addHotSpot(
                {
                    pitch: 30,  //Vertical position (-90 to 90)
                    yaw: 0,    //Horizontal position (-180 to 180)
                    scale: 10.0,  //Size of hotspot
                    type: "custom",
                    cssClass: "stainedGlassHotspot",
                    createTooltipFunc: (hotspotDiv) => {
                      hotspotDiv.style.cursor = "pointer";

                      // Add click event listener
                      hotspotDiv.onclick = () => {
                          setStainedGlassPopupVisible(true);
                      };
                  },
                },
                "firstScene"
            );
            ReactPannellum.addHotSpot(
              {
                pitch: 0,
                yaw: 50,
                type: "custom",
                cssClass: "organHotspot",
                createTooltipFunc: (hotspotDiv) => {
                  hotspotDiv.style.cursor = "pointer";

                  // Add click event listener
                  hotspotDiv.onclick = () => {
                      
                    setOrganPopupVisible(true);
                  };
                },
              },
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

    {stainedGlassPopupVisible && (
      <div className="popup">
          <div className="stainedGlass">
              <h2>StainedGlass</h2>
              <p> Stained Glass</p>
              <button onClick={() => setStainedGlassPopupVisible(false)}>Close</button>
          </div>
      </div>
      )}

    {organPopupVisible && (
          <div className="popup">
              <div className="organ-content">
                  <h2>The Chapel Organ</h2>
                  <p>An organ is a keyboard instrument that produces sound using pressurized air and pipes. The player uses their hands and feet to operate the organ. 
                  </p>
                  <button onClick={() => setOrganPopupVisible(false)}>Close</button>
              </div>
          </div>
          )}


  </div>
);
};

export default Panorama;