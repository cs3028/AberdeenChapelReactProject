import React, { useEffect, useState } from 'react';
import ReactPannellum from "react-pannellum";
import "./Panorama.css"; 
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

  
function Panorama() {

    const navigate = useNavigate();
    const [largePulpitPopupVisible, setLargePulpitPopupVisible] = useState(false);
    const [elphinstoneGravePopupVisible, setElphinstoneGravePopupVisible] = useState(false);
    const [chapelCeilingPopupVisible, setChapelCeilingPopupVisible] = useState(false);
    const [maryPopupVisible, setMaryPopupVisible] = useState(false);
    const [directionPopupVisible, setDirectionPopupVisible] = useState(false);

  useEffect(() => {
    const addHotspot = () => {

    if (ReactPannellum.getCurrentScene() === "firstScene") {
        ReactPannellum.addHotSpot(
        {
          pitch: 0,
          yaw: 180,
          type: "custom",
          cssClass: "directionHotspot",
          createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";
            hotspotDiv.onclick = () => {
              setDirectionPopupVisible(true);
            };
          },
        },
      );
        ReactPannellum.addHotSpot(
        {
            pitch: 35,
            yaw: 300,
            type: "custom",
            cssClass: "largePulpitHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setLargePulpitPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: -15,
            yaw: 350,
            type: "custom",
            cssClass: "elphinstoneGraveHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setElphinstoneGravePopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: 40,
            yaw: 0,
            type: "custom",
            cssClass: "chapelCeilingHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setChapelCeilingPopupVisible(true);
            };
            },
        },
        );

        ReactPannellum.addHotSpot(
        {
            pitch: 35,
            yaw: 90,
            type: "custom",
            cssClass: "maryHotspot",
            createTooltipFunc: (hotspotDiv) => {
            hotspotDiv.style.cursor = "pointer";

            // Add click event listener
            hotspotDiv.onclick = () => {
                
                setMaryPopupVisible(true);
            };
            },
        },
        );
      };
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
      imageSource="images/sanctuary.jpg"
      style={style}
    />


{largePulpitPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>The Main Chapel Pulpit</h2>
                <p>King's College Chapel houses a historically significant pulpit, originally erected in the late 1530s at St Machar's Cathedral. This pulpit, known as Bishop Stewart's Pulpit, was later moved to King's College Chapel, where it remains a notable feature. The pulpit is recognized for its intricate woodwork and serves as a testament to the craftsmanship of the period.</p>
                <div className="popup-buttons">
                  <Link to="/largePulpit" className="info-button">Learn more</Link>
                  <button onClick={() => setLargePulpitPopupVisible(false)}>Close</button>
                </div>
            </div>
        </div>
        )}

      {elphinstoneGravePopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>Elphinstone's Grave</h2>
                <p>Bishop William Elphinstone, who founded the University of Aberdeen in 1495, was buried inside King's College Chapel upon his death in 1514. His original Renaissance tomb was destroyed during the Reformation. In the early 20th century, a bronze and marble monument was commissioned to commemorate him. Designed by Henry Wilson and completed in 1931, the monument was initially intended for placement inside the chapel. However, due to its size, it was eventually installed outside the main entrance in 1946, where it remains today. ​</p>
                <div className="popup-buttons">
                  <Link to="/elphinstoneGrave" className="info-button">Learn more</Link>
                  <button onClick={() => setElphinstoneGravePopupVisible(false)}>Close</button>
                </div>
            </div>
        </div>
        )}
      
      {chapelCeilingPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>The Chapel Ceiling</h2>
                <p>King's College Chapel in Aberdeen features a historically significant timber ceiling. This splendid timber ceiling adds to the chapel's architectural beauty and historical significance.</p>
                <div className="popup-buttons">
                  <Link to="/chapelCeiling" className="info-button">Learn more</Link>
                  <button onClick={() => setChapelCeilingPopupVisible(false)}>Close</button>
                </div>
            </div>
        </div>
        )}

      {maryPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>Saying Goodbye to Mary</h2>
                <p>The chapel is dedicated to the Trinity and the Blessed Virgin Mary in her Nativity, as per its foundation in 1495.</p>
                <div className="popup-buttons">
                  <Link to="/mary" className="info-button">Learn more</Link>
                  <button onClick={() => setMaryPopupVisible(false)}>Close</button>
                </div>
            </div>
        </div>
        )}

      {directionPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Back to the Choir Stalls Section</h2>
            <div className="popup-buttons">
              <Link to="/choirStallsPanorama" className="info-button">Click to Enter Section</Link>
              <button onClick={() => setDirectionPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
        )}


  </div>
);
};

export default Panorama;
