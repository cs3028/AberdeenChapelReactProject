import React, { useEffect, useState } from 'react';
import ReactPannellum from "react-pannellum";
import "./Panorama.css";
import { Link } from "react-router-dom";

function Panorama() {
  const [stainedGlassPopupVisible, setStainedGlassPopupVisible] = useState(false);
  const [organPopupVisible, setOrganPopupVisible] = useState(false);
  const [roodScreenPopupVisible, setRoodScreenPopupVisible] = useState(false);
  const [warMemorialPopupVisible, setWarMemorialPopupVisible] = useState(false);
  const [smallPulpitPopupVisible, setSmallPulpitPopupVisible] = useState(false);

  // Disable scroll when popup is open (only in .panorama-page)
  useEffect(() => {
    const isPopupOpen =
      stainedGlassPopupVisible ||
      organPopupVisible ||
      roodScreenPopupVisible ||
      warMemorialPopupVisible ||
      smallPulpitPopupVisible;

    const container = document.querySelector('.panorama-page');

    if (isPopupOpen && container) {
      container.style.overflow = 'hidden'; // Disable scrolling
    } else if (container) {
      container.style.overflow = ''; // Restore scrolling
    }

    return () => {
      if (container) {
        container.style.overflow = ''; // Cleanup on unmount
      }
    };
  }, [
    stainedGlassPopupVisible,
    organPopupVisible,
    roodScreenPopupVisible,
    warMemorialPopupVisible,
    smallPulpitPopupVisible,
  ]);

  useEffect(() => {
    const addHotspot = () => {
      if (ReactPannellum.getCurrentScene() === "firstScene") {
        ReactPannellum.addHotSpot(
          {
            pitch: 30,
            yaw: 0,
            scale: 10.0,
            type: "custom",
            cssClass: "stainedGlassHotspot",
            createTooltipFunc: (hotspotDiv) => {
              hotspotDiv.style.cursor = "pointer";
              hotspotDiv.onclick = () => setStainedGlassPopupVisible(true);
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
              hotspotDiv.onclick = () => setOrganPopupVisible(true);
            },
          },
          "firstScene"
        );

        ReactPannellum.addHotSpot(
          {
            pitch: 0,
            yaw: 180,
            type: "custom",
            cssClass: "roodScreenHotspot",
            createTooltipFunc: (hotspotDiv) => {
              hotspotDiv.style.cursor = "pointer";
              hotspotDiv.onclick = () => setRoodScreenPopupVisible(true);
            },
          },
          "firstScene"
        );

        ReactPannellum.addHotSpot(
          {
            pitch: 0,
            yaw: 270,
            type: "custom",
            cssClass: "warMemorialHotspot",
            createTooltipFunc: (hotspotDiv) => {
              hotspotDiv.style.cursor = "pointer";
              hotspotDiv.onclick = () => setWarMemorialPopupVisible(true);
            },
          },
          "firstScene"
        );

        ReactPannellum.addHotSpot(
          {
            pitch: 0,
            yaw: 0,
            type: "custom",
            cssClass: "smallPulpitHotspot",
            createTooltipFunc: (hotspotDiv) => {
              hotspotDiv.style.cursor = "pointer";
              hotspotDiv.onclick = () => setSmallPulpitPopupVisible(true);
            },
          },
          "firstScene"
        );
      }
    };

    setTimeout(addHotspot, 500);
  }, []);

  const style = {
    width: "100%",
    height: "700px",
    background: "#000000"
  };

  const config = {
    autoLoad: true,
    showControls: false,
  };

  return (
    <div className="panorama-page"> {/* Wrapped here */}
      <ReactPannellum
        id="1"
        sceneId="firstScene"
        config={config}
        imageSource="images/chapelPanorama.jpg"
        style={style}
      />

      {/* Stained Glass Popup */}
      {stainedGlassPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Stained Glass</h2>
            <p>Info On Stained Glass</p>
            <div className="popup-buttons">
              <Link to="/stainedGlass" className="info-button">Learn more</Link>
              <button onClick={() => setStainedGlassPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Organ Popup */}
      {organPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>The Chapel Organ</h2>
            <p>An organ is a keyboard instrument that produces sound using pressurized air and pipes.</p>
            <div className="popup-buttons">
              <Link to="/organ" className="info-button">Learn more</Link>
              <button onClick={() => setOrganPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Rood Screen Popup */}
      {roodScreenPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>The Rood Screen</h2>
            <p>Info On Rood Screen</p>
            <div className="popup-buttons">
              <Link to="/roodScreen" className="info-button">Learn more</Link>
              <button onClick={() => setRoodScreenPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* War Memorial Popup */}
      {warMemorialPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>The War Memorial</h2>
            <p>Info On War Memorial</p>
            <div className="popup-buttons">
              <Link to="/warMemorial" className="info-button">Learn more</Link>
              <button onClick={() => setWarMemorialPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Small Pulpit Popup */}
      {smallPulpitPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>The Small Pulpit</h2>
            <p>Info On The Small Pulpit</p>
            <div className="popup-buttons">
              <Link to="/smallPulpit" className="info-button">Learn more</Link>
              <button onClick={() => setSmallPulpitPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Panorama;
