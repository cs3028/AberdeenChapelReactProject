import React, { useEffect, useState } from 'react';
import ReactPannellum from "react-pannellum";
import "./Panorama.css"; 
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



  
function Panorama() {

  const navigate = useNavigate();
  const [organPopupVisible, setOrganPopupVisible] = useState(false);
  const [roodScreenPopupVisible, setRoodScreenPopupVisible] = useState(false);
  const [warMemorialPopupVisible, setWarMemorialPopupVisible] = useState(false);
  const [smallPulpitPopupVisible, setSmallPulpitPopupVisible] = useState(false);
  const [anteChapelPopupVisible, setAnteChapelPopupVisible] = useState(false);

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
              yaw: 180,
              type: "scene",
              sceneId: "secondScene",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                  ReactPannellum.destroy() ;
                  navigate('/choirStallsPanorama')  ;
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
      imageSource="images/AnteChapel.jpg"
      style={style}
    />


    {anteChapelPopupVisible && (
        <div className="popup">
            <div className="popup-content">
                <h2>The Ante-Chapel</h2>
                <p>The Antechapel serves as a space to honor University members who lost their lives in World War I and II, with a commemorative window and names displayed around the room. While its structure has remained largely unchanged, it has become smaller due to the addition of the Rood Screen. The Antechapel now welcomes visitors into the Chapel, where services and events continue to be held.</p>
                <div className="popup-buttons">
                  <Link to="/anteChapel" className="info-button">Learn more</Link>
                  <button onClick={() => setAnteChapelPopupVisible(false)}>Close</button>
                </div>
            </div>
        </div>
        )}

    {roodScreenPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>The Rood Screen</h2>
            <p>The Rood Screen, originally a divider between worshipers and the clergy, was moved to align with the current entrance to accommodate changing needs. Initially, the chapel was reserved for King’s College members, with the screen separating students from leadership. After its relocation, the growing student body had to attend services at St. Machar’s, monitored by professors to ensure no one strayed.</p>
            <div className="popup-buttons">
              <Link to="/roodScreen" className="info-button">Learn more</Link>
              <button onClick={() => setRoodScreenPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}    

    {warMemorialPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>The War Memorial</h2>
            <p>The Antechapel of King's College Chapel at the University of Aberdeen serves as the university's war memorial, honoring 524 students and staff who lost their lives in the First and Second World Wars. Their names are inscribed on the panelling around the walls. The War Memorial Window, created by Douglas Strachan in 1920-1921, adds to the commemorative atmosphere.</p>
            <div className="popup-buttons">
              <Link to="/warMemorial" className="info-button">Learn more</Link>
              <button onClick={() => setWarMemorialPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}  

    {smallPulpitPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>The Small Pulpit</h2>
            <p>This small wooden structure along the western wall was once one of two pulpits on the upper part of the Rood Screen, used for reading the New Testament Gospels during services. It became obsolete when the organ was introduced, leading to the removal of the pulpits to make space for the instrument.</p>
            <div className="popup-buttons">
              <Link to="/smallPulpit" className="info-button">Learn more</Link>
              <button onClick={() => setSmallPulpitPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

    {organPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>The Chapel Organ</h2>
            <p>King's College Chapel houses a distinguished organ crafted by French master organ builder Bernard Aubertin. Installed in April 2004, this instrument is notable for being the first Aubertin organ in the United Kingdom. .</p>
            <div className="popup-buttons">
              <Link to="/organ" className="info-button">Learn more</Link>
              <button onClick={() => setOrganPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
  </div>
);
};
export default Panorama;