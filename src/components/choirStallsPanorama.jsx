import React, { useEffect, useState } from 'react';
import ReactPannellum from "react-pannellum";
import "./Panorama.css"; 
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

  
function Panorama() {
    
  const navigate = useNavigate();  
  const [graffitiPopupVisible, setGraffitiPopupVisible] = useState(false);
  const [choirStallsPopupVisible, setChoirStallsPopupVisible] = useState(false);
  const [stainedGlassPopupVisible, setStainedGlassPopupVisible] = useState(false);
  const [anteDirectionPopupVisible, setAnteDirectionPopupVisible] = useState(false);
  const [sanctuaryDirectionPopupVisible, setSanctuaryDirectionPopupVisible] = useState(false);

  useEffect(() => {
    const addHotspot = () => {

        if (ReactPannellum.getCurrentScene() === "firstScene") {
          ReactPannellum.addHotSpot(
            {
              pitch: 180,
              yaw: 2,
              type: "custom",
              cssClass: "directionHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                  setAnteDirectionPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: 0,
              yaw: 90,
              type: "custom",
              cssClass: "graffitiHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";

                hotspotDiv.onclick = () => {
                    
                  setGraffitiPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: -40,
              yaw: 360,
              type: "custom",
              cssClass: "choirStallsHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";

                hotspotDiv.onclick = () => {
                    
                  setChoirStallsPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
                pitch: 40, 
                yaw: 270,    
                scale: 10.0,  
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
        );
        ReactPannellum.addHotSpot(
          {
            pitch: 180,
            yaw: 182,
            type: "custom",
            cssClass: "directionHotspot",
            createTooltipFunc: (hotspotDiv) => {
              hotspotDiv.style.cursor = "pointer";
              hotspotDiv.onclick = () => {
                setSanctuaryDirectionPopupVisible(true);
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
      imageSource="images/choirStallsSection.jpg"
      style={style}
    />


    {stainedGlassPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Stained Glass</h2>
            <p>The three panels depict key moments in the founding of King’s College. The first shows Bishop Elphinstone’s journey to Rome in 1495 to receive permission from Pope Alexander VI. The second illustrates his return and the start of construction in 1500, delayed by the need to secure the foundation with large cut trees. The final panel portrays the dedication of King’s College to James IV of Scotland, the Trinity, and the Virgin Mary, honoring the king’s crucial role in its establishment..</p>
            <div className="popup-buttons">
              <Link to="/stainedGlass" className="info-button">Learn more</Link>
              <button onClick={() => setStainedGlassPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

    {graffitiPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>Ancient Graffiti Within the Chapel</h2>
                <p>The choir seats bear graffiti left by students since the early 1600s, reflecting their studies and focus on penmanship. Scribal work was a key discipline, and even their carvings show careful craftsmanship, with faint tracing lines used as guides to ensure precision.</p>
                <div className="popup-buttons">
                  <Link to="/graffiti" className="info-button">Learn more</Link>
                  <button onClick={() => setGraffitiPopupVisible(false)}>Close</button>
                </div>
            </div>
        </div>
        )}  



    {choirStallsPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>The Choir Stalls Section</h2>
                <p>In 1497, Bishop Elphinstone envisioned King’s College as a place of continuous song and worship, with daily services led by priests, prebendaries, and choirboys, whose numbers grew over time. The choir seats were originally connected to the Rood Screen and moved when it was relocated. Their original position can still be inferred by observing the window shapes, with an additional section added during the 1800s renovation.</p>
                <div className="popup-buttons">
                  <Link to="/choirStalls" className="info-button">Learn more</Link>
                  <button onClick={() => setChoirStallsPopupVisible(false)}>Close</button>
                </div>
            </div>
        </div>
        )}
      
    {anteDirectionPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Back to the Ante-Chapel Section</h2>
            <div className="popup-buttons">
              <Link to="/Panorama" className="info-button">Click to Enter Section</Link>
              <button onClick={() => setAnteDirectionPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

    {sanctuaryDirectionPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Please Enter The Sanctuary Section</h2>
            <div className="popup-buttons">
              <Link to="/sanctuaryPanorama" className="info-button">Click to Enter Section</Link>
              <button onClick={() => setSanctuaryDirectionPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}


  </div>
);
};

export default Panorama;
