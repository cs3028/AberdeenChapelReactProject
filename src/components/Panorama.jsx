import React, { useEffect, useState } from 'react';
import ReactPannellum from "react-pannellum";
import "./Panorama.css"; 
import { Link } from "react-router-dom";


  
function Panorama() {

  const [organPopupVisible, setOrganPopupVisible] = useState(false);
  const [roodScreenPopupVisible, setRoodScreenPopupVisible] = useState(false);
  const [warMemorialPopupVisible, setWarMemorialPopupVisible] = useState(false);
  const [smallPulpitPopupVisible, setSmallPulpitPopupVisible] = useState(false);
  const [anteChapelPopupVisible, setAnteChapelPopupVisible] = useState(false);
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
              pitch: 40,
              yaw: 180,
              type: "custom",
              cssClass: "organHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                  setOrganPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: 0,
              yaw: 200,
              type: "custom",
              cssClass: "roodScreenHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                    
                  setRoodScreenPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: 35,
              yaw: 320,
              type: "custom",
              cssClass: "smallPulpitHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                    
                  setSmallPulpitPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: -10,
              yaw: 300,
              type: "custom",
              cssClass: "warMemorialHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
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
              cssClass: "anteChapelHotspot",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                   
                  setAnteChapelPopupVisible(true);
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: 0,
              yaw: 182,
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
        }
    };

    // wait for the scene to load before adding hotspots
    setTimeout(addHotspot, 500); // small delay to ensure Pannellum loads

    return () => {
      window.speechSynthesis.cancel(); // stop text to speech when leaving the page
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
      imageSource="images/AnteChapel.jpg"
      style={style}
    />


    {anteChapelPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>The Ante-Chapel</h2>
                <p id = "anteChapelParagraph">The Antechapel serves as a space to honor University members who lost their lives in World War I and II, with a commemorative window and names displayed around the room. While its structure has remained largely unchanged, it has become smaller due to the addition of the Rood Screen. The Antechapel now welcomes visitors into the Chapel, where services and events continue to be held.</p>
                <div className="popup-buttons">
                  <Link to="/anteChapel" className="info-button">Learn more</Link>
                  <button onClick={() => speakText(document.getElementById('anteChapelParagraph').textContent)}>Listen To Audio</button>
                  <button onClick={stopSpeech}>Stop Audio</button>
                  </div>
                  <div className = "popup-close-button">
                    <button className = "close-button" onClick={() => {
                    setAnteChapelPopupVisible(false);
                    stopSpeech();
                    }}>X</button>
                </div>
            </div>
        </div>
        )}

    {roodScreenPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>The Rood Screen</h2>
            <p id = "roodScreenParagraph">The Rood Screen, originally separating the clergy and choir from worshipers in the antechapel, was relocated to align with the current entrance to meet changing needs. Initially, the antechapel served to divide the small student body—then part of a private collegiate chapel linked to King’s College—from chapel leadership. As student numbers grew, the screen’s move meant students now walked to St. Machar’s for services, supervised by professors to prevent straying during the journey.</p>
            <div className="popup-buttons">
              <Link to="/roodScreen" className="info-button">Learn more</Link>
              <button onClick={() => speakText(document.getElementById('roodScreenParagraph').textContent)}>Listen To Audio</button>
              <button onClick={stopSpeech}>Stop Audio</button>
              </div>
                <div className = "popup-close-button">
                  <button className = "close-button" onClick={() => {
                setRoodScreenPopupVisible(false);
                stopSpeech();
                }}>X</button>
            </div>
          </div>
        </div>
      )}    

    {warMemorialPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>The War Memorial</h2>
            <p id = "warMemParagraph">The Antechapel of King's College Chapel at the University of Aberdeen serves as the university's war memorial, honoring 524 students and staff who lost their lives in the First and Second World Wars. Their names are inscribed on the panelling around the walls. The War Memorial Window, created by Douglas Strachan in 1920-1921, adds to the commemorative atmosphere.</p>
            <div className="popup-buttons">
              <button onClick={() => speakText(document.getElementById('warMemParagraph').textContent)}>Listen To Audio</button>
              <button onClick={stopSpeech}>Stop Audio</button>
              </div>
                <div className = "popup-close-button">
                  <button className = "close-button" onClick={() => {
                setWarMemorialPopupVisible(false);
                stopSpeech();
                }}>X</button>
            </div>
          </div>
        </div>
      )}  

    {smallPulpitPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>The Small Pulpit</h2>
            <p id = "smallPulpitParagraph">Now seeming oddly placed along the western wall, this small wooden structure was once one of two pulpits atop the Rood Screen. From these, students would read the New Testament Gospels, sharing the word of God from an elevated position during services. Both pulpits were removed to make space when the organ was introduced to the chapel.</p>
            <div className="popup-buttons">
              <Link to="/smallPulpit" className="info-button">Learn more</Link>
              <button onClick={() => speakText(document.getElementById('smallPulpitParagraph').textContent)}>Listen To Audio</button>
              <button onClick={stopSpeech}>Stop Audio</button>
              </div>
              <div className = "popup-close-button">
              <button className = "close-button" onClick={() => {
                setSmallPulpitPopupVisible(false);
                stopSpeech();
                }}>X</button>
            </div>
          </div>
        </div>
      )}

    {organPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>The Chapel Organ</h2>
            <p id = "organParagraph">King's College Chapel houses a distinguished organ crafted by French master organ builder Bernard Aubertin. Installed in April 2004, this instrument is notable for being the first Aubertin organ in the United Kingdom. .</p>
            <div className="popup-buttons">
              <Link to="/organ" className="info-button">Learn more</Link>
              <button onClick={() => speakText(document.getElementById('organParagraph').textContent)}>Listen To Audio</button>
              <button onClick={stopSpeech}>Stop Audio</button>
              </div>
              <div className = "popup-close-button">
              <button className = "close-button" onClick={() => {
                setOrganPopupVisible(false);
                stopSpeech();
                }}>X</button>
            </div>
          </div>
        </div>
      )}

    {directionPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Please Enter the Next Section of the Chapel Through the Rood Screen</h2>
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