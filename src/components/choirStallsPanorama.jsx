import React, { useEffect, useState } from 'react';
import ReactPannellum from "react-pannellum";
import "./Panorama.css"; 
import { Link } from "react-router-dom";
  
function Panorama() {

  const [graffitiPopupVisible, setGraffitiPopupVisible] = useState(false);
  const [choirStallsPopupVisible, setChoirStallsPopupVisible] = useState(false);
  const [stainedGlassPopupVisible, setStainedGlassPopupVisible] = useState(false);
  const [anteDirectionPopupVisible, setAnteDirectionPopupVisible] = useState(false);
  const [sanctuaryDirectionPopupVisible, setSanctuaryDirectionPopupVisible] = useState(false);
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
      imageSource="images/choirStallsSection.jpg"
      style={style}
    />


    {stainedGlassPopupVisible && (
       <div className="popup">
          <div className="popup-content">
              <h2>Lovely Stained Glass in the Chapel</h2>
              <p id = "stainedGlassParagraph">The three panels depict key moments in the founding of King’s College. The first shows Bishop Elphinstone’s journey to Rome in 1495 to receive permission from Pope Alexander VI. The second illustrates his return and the start of construction in 1500, delayed by the need to secure the foundation with large cut trees. The final panel portrays the dedication of King’s College to James IV of Scotland, the Trinity, and the Virgin Mary, honoring the king’s crucial role in its establishment</p>
              <div className="popup-buttons">
                <button onClick={() => speakText(document.getElementById('stainedGlassParagraph').textContent)}>Listen To Audio</button>
                <button onClick={stopSpeech}>Stop Audio</button>
              </div>
              <div className="popup-close-button">
                <button className = "close-button" onClick={() => {
                  setStainedGlassPopupVisible(false);
                  stopSpeech();
                  }}>X</button>
              </div>
          </div>
      </div>
    )}

    {graffitiPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>Ancient Graffiti Within the Chapel</h2>
                <p id = "graffitiParagraph">The choir seats bear graffiti left by students since the early 1600s, reflecting their studies and focus on penmanship. Scribal work was a key discipline, and even their carvings show careful craftsmanship, with faint tracing lines used as guides to ensure precision.</p>
                <div className="popup-buttons">
                  <Link to="/graffiti" className="info-button">Learn more</Link>
                  <button onClick={() => speakText(document.getElementById('graffitiParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                </div>
                <div className="popup-close-button">
                  <button className = "close-button" onClick={() => {
                    setGraffitiPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}  



    {choirStallsPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>The Choir Stalls Section</h2>
                <p id = "choirStallParagraph">In 1497, Bishop Elphinstone directed that daily services—including matins, evensong, the Mass of Our Lady, and High Mass—be sung, especially on Sundays and feast days. His vision for King’s College was one of near-continuous song, performed by six priests, eight prebendaries, and four choir boys—numbers that grew over time.

                The choir seats, originally attached to the Rood Screen in the antechapel, moved with it. Their original placement can still be imagined by observing the window shapes—part of the chapel was later expanded during 19th-century renovations.</p>
                <div className="popup-buttons">
                  <Link to="/choirStalls" className="info-button">Learn more</Link>
                  <button onClick={() => speakText(document.getElementById('choirStallParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className="popup-close-button">
                  <button className = "close-button" onClick={() => {
                    setChoirStallsPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
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
              <button onClick={() => setAnteDirectionPopupVisible(false)}>X</button>
            </div>
          </div>
        </div>
      )}

    {sanctuaryDirectionPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Please Enter The Sanctuary Section at the End of the Chapel</h2>
            <div className="popup-buttons">
              <Link to="/sanctuaryPanorama" className="info-button">Click to Enter Section</Link>
              <button onClick={() => setSanctuaryDirectionPopupVisible(false)}>X</button>
            </div>
          </div>
        </div>
      )}


  </div>
);
}

export default Panorama;
