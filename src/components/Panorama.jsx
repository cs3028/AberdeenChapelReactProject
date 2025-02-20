import React, { useEffect, useState } from 'react';
import ReactPannellum from "react-pannellum";
import "./Panorama.css"; // Import the CSS file
import { Link } from "react-router-dom";

//import Carousel from '../Carousel';


  
function Panorama() {

  const [stainedGlassPopupVisible, setStainedGlassPopupVisible] = useState(false);
  const [organPopupVisible, setOrganPopupVisible] = useState(false);
  const [roodScreenPopupVisible, setRoodScreenPopupVisible] = useState(false);
  const [warMemorialPopupVisible, setWarMemorialPopupVisible] = useState(false);
  const [smallPulpitPopupVisible, setSmallPulpitPopupVisible] = useState(false);

  useEffect(() => {
    const addHotspot = () => {
        if (ReactPannellum.getCurrentScene() === "firstScene") {
            ReactPannellum.addHotSpot(
                {
                    pitch: 30,  //Vertical position 0 to 359
                    yaw: 0,    //Horizontal position 0 to 359
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
                yaw: 90,
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
            ReactPannellum.addHotSpot(
              {
                pitch: 0,
                yaw: 180,
                type: "custom",
                cssClass: "roodScreenHotspot",
                createTooltipFunc: (hotspotDiv) => {
                  hotspotDiv.style.cursor = "pointer";

                  // Add click event listener
                  hotspotDiv.onclick = () => {
                      
                    setRoodScreenPopupVisible(true);
                  };
                },
              },
            );
            ReactPannellum.addHotSpot(
              {
                pitch: 0,
                yaw: 270,
                type: "custom",
                cssClass: "warMemorialHotspot",
                createTooltipFunc: (hotspotDiv) => {
                  hotspotDiv.style.cursor = "pointer";

                  // Add click event listener
                  hotspotDiv.onclick = () => {
                      
                    setWarMemorialPopupVisible(true);
                  };
                },
              },
            );
            ReactPannellum.addHotSpot(
              {
                pitch: 0,
                yaw: 0,
                type: "custom",
                cssClass: "smallPulpitHotspot",
                createTooltipFunc: (hotspotDiv) => {
                  hotspotDiv.style.cursor = "pointer";

                  // Add click event listener
                  hotspotDiv.onclick = () => {
                      
                    setSmallPulpitPopupVisible(true);
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
              <p> Info On Stained Glass</p>
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
                  <Link to = "/organ" className = "Organ-Info">More Information</Link>
                  <button onClick={() => setOrganPopupVisible(false)}>Close</button>
              </div>
          </div>
          )}

    {roodScreenPopupVisible && (
      <div className="popup">
          <div className="roodScreen">
              <h2>The Rood Screen</h2>
              <p>Info On Rood Screen</p>
              <Link to = "/roodScreen" className = "RoodScreen-Info">More Information</Link>
              <button onClick={() => setRoodScreenPopupVisible(false)}>Close</button>
          </div>
      </div>
      )}

    {warMemorialPopupVisible && (
      <div className="popup">
          <div className="warMemorial">
              <h2>The War Memorial</h2>
              <p>Info On War Memorial</p>
              <Link to = "/warMemorial" className = "WarMemorial-Info">More Information</Link>
              <button onClick={() => setWarMemorialPopupVisible(false)}>Close</button>
          </div>
      </div>
      )}

    {smallPulpitPopupVisible && (
      <div className="popup">
          <div className="smallPulpit">
              <h2>The Small Pulpit</h2>
              <p>Info On The Small Pulpit</p>
              <Link to = "/SmallPulpit" className = "SmallPulpit-Info">More Information</Link>
              <button onClick={() => setSmallPulpitPopupVisible(false)}>Close</button>
          </div>
      </div>
      )}


  </div>
);
};

export default Panorama;