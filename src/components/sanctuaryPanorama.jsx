import React, { useEffect, useState } from 'react';
import ReactPannellum from "react-pannellum";
import "./Panorama.css"; 
import { Link } from "react-router-dom";
  
function Panorama() {

    const [largePulpitPopupVisible, setLargePulpitPopupVisible] = useState(false);
    const [elphinstoneGravePopupVisible, setElphinstoneGravePopupVisible] = useState(false);
    const [chapelCeilingPopupVisible, setChapelCeilingPopupVisible] = useState(false);
    const [maryPopupVisible, setMaryPopupVisible] = useState(false);
    const [directionPopupVisible, setDirectionPopupVisible] = useState(false);
    //Add text to speech
  const speakText = (text) => {
    const synth = window.speechSynthesis;
    synth.cancel(); // Cancel previous speech, if any
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  //Stop text to speech
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };

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
      }
    };

    // Wait for the scene to load before adding hotspots
    setTimeout(addHotspot, 500); // Small delay to ensure Pannellum loads

    return () => {
      window.speechSynthesis.cancel(); //Stop text to speech when leaving the page
    }

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
                <p id = "pulpitParagraph">The pulpit was originally a part of the St. Machar’s Cathedral but was moved here during the 1800s renovation. On it you can see the arms of Bishop William Stewart (d. 1545).</p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('pulpitParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setLargePulpitPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

      {elphinstoneGravePopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>Elphinstone's Grave</h2>
                <p id = "graveParagraph">What remains today is the original base and cover slab of the tomb Chest. It is made of Black marble which was brought from Tournai in Belgium. This same marble from Tourai can be seen in adjoining grave markers.  The Statue of Bishop Elphinstone and supporting figures were destroyed after the Reformation.​</p>
                <div className="popup-buttons">
                  <Link to="/elphinstoneGrave" className="info-button">Learn more</Link>
                  <button onClick={() => speakText(document.getElementById('graveParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setElphinstoneGravePopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}
      
      {chapelCeilingPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>The Chapel Ceiling</h2>
                <p id = "ceilingParagraph">King's College Chapel in Aberdeen features a historically significant timber ceiling. This splendid timber ceiling adds to the chapel's architectural beauty and historical significance.</p>
                <div className="popup-buttons">
                  <button onClick={() => speakText(document.getElementById('ceilingParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setChapelCeilingPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

      {maryPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>Saying Goodbye to Mary</h2>
                <p id = "maryParagraph">The piece above the old Library door—now our exit—was a later addition from Germany, contemporary with the chapel’s construction. It became a meaningful final stop for Catholic visitors to pray for safety and health before departing.</p>
                <div className="popup-buttons">
                  <Link to="/mary" className="info-button">Learn more</Link>
                  <button onClick={() => speakText(document.getElementById('maryParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-button-close">
                  <button className = "close-button" onClick={() => {
                    setMaryPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
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
              <button onClick={() => setDirectionPopupVisible(false)}>X</button>
            </div>
          </div>
        </div>
        )}


  </div>
);
}

export default Panorama;
