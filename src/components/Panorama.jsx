import React, { useEffect, useState } from 'react';
import ReactPannellum, { loadScene } from "react-pannellum";
import "./Panorama.css"; 
import { Link } from "react-router-dom";
import { getConfig } from '@testing-library/react';



  
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

  


    
  
      const [currentScene, setCurrentScene] = useState("firstScene");
      const [currentImage, setCurrentImage] = useState("/images/AnteChapel.jpg");








      
      const changeScene = (scene) => {
        console.log(`Trying to change to scene: ${scene}`);
    
        let availableScenes = ReactPannellum.getAllScenes();
        
        if (!availableScenes || availableScenes.length === 0) {
            console.error("No scenes have been added to Pannellum");
            return;
        }
    
        // 🔥 Fix: Convert the array to an object lookup
        let sceneMap = Object.assign({}, ...availableScenes);  // Merges array of objects into one object
    
        console.log("Scene Map:", sceneMap); // Debugging output
    
        if (!sceneMap[scene]) {
            console.error(`Scene "${scene}" does not exist in Pannellum`);
            return;
        }
    
        ReactPannellum.loadScene(scene);
        setCurrentScene(scene);
    
    
        setTimeout(() => {
          const allScenes = ReactPannellum.getAllScenes();
          console.log("scenes after delay:", allScenes);
      }, 2000);  // Increase delay to ensure scenes are added
      
    };
    
    
    
    
    
    
    

    /*(useEffect(() => {
      console.log(" Attempting to add scenes");
  
      ReactPannellum.addScene("firstScene", {
        id: 1,
        title: "Lobby",
        hfov: 130,
        pitch: 0,
        yaw: 0,
        type: "equirectangular",
        imageSource: "/images/chapelPanorama.jpg",
      });
  
      ReactPannellum.addScene("secondScene", {
        id: 1,
        title: "Lobby",
        hfov: 130,
        pitch: 0,
        yaw: 0,
        type: "equirectangular",
        imageSource: "/images/AnteChapel.jpg",
      });
  
      ReactPannellum.addScene("thirdScene", {
          autoLoad: false,
          showControls: false,
          imageSource: "/images/secondScene.jpg",
      });
      // Wait and verify that the scenes were added
      setTimeout(() => {
          let availableScenes = ReactPannellum.getAllScenes();
          console.log("Scenes after delay:", availableScenes);
      }, 1500);
  }, []);
  */
  
  
  
  
  
  
  

  
      // runs once
    
      useEffect(() => {
        console.log("Waiting for Pannellum to initialize");
      
        // Add a small delay to ensure Pannellum is ready
        setTimeout(() => {
          console.log("Adding the new scene automatically");
          addNewScene("secondScene",{
            id: 1,
            title: "secondScene",
            hfov: 130,
            pitch: 0,
            yaw: 0,
            type: "equirectangular",
            imageSource: "/images/choirStallsSection.jpg",
          });

          addNewScene("thirdScene",{
            id: 2,
            title: "thirdScene",
            hfov: 130,
            pitch: 0,
            yaw: 0,
            type: "equirectangular",
            imageSource: "/images/sanctuary.jpg",
          })
        }, 1000); // 1-second delay to make sure Pannellum is initialized
      }, []);
      

  useEffect(() => {
    
  const addHotspot = () => {
      console.log("awfawfawfwfa: ",ReactPannellum.getCurrentScene())
      //First Scene Hotspots
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
            ReactPannellum.addHotSpot(
              {
                pitch: 180,
                yaw: 30,
                type: "scene",
                sceneId: "secondScene",
                createTooltipFunc: (hotspotDiv) => {
                  hotspotDiv.style.cursor = "pointer";
                  hotspotDiv.onclick = () => {
                    changeScene("secondScene");
                  };
                },
              },
            );
            
            
            
        }

        //Second Scene Hotspots

        else if (ReactPannellum.getCurrentScene() === "secondScene"){
          ReactPannellum.addHotSpot(
            {
              pitch: 180,
              yaw: 2,
              type: "scene",
              sceneId: "firstScene",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                  changeScene("firstScene");
                };
              },
            },
          );
          ReactPannellum.addHotSpot(
            {
              pitch: 180,
              yaw: 182,
              type: "scene",
              sceneId: "thirdScene",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                  changeScene("thirdScene");
                };
              },
            },
          );


          

        } else if (ReactPannellum.getCurrentScene() === "thirdScene"){
          //Third Scene Hotspots

          ReactPannellum.addHotSpot(
            {
              pitch: 180,
              yaw: 30,
              type: "scene",
              sceneId: "secondScene",
              createTooltipFunc: (hotspotDiv) => {
                hotspotDiv.style.cursor = "pointer";
                hotspotDiv.onclick = () => {
                  changeScene("secondScene");
                };
              },
            },
          );

        }
    };

    // Wait for the scene to load before adding hotspots
    setTimeout(() => {
        addHotspot();
    }, 500); // Small delay to ensure Pannellum loads
console.log(currentScene)
    }, [currentScene]);

  const style = {
    width: "100%",
    height: "700px",
    background: "#000000"
  };

  const config = {
      autoLoad: true,
      showControls: false,
    };
  
    function addNewScene(sceneId, config) {
      ReactPannellum.addScene(sceneId, config)
      ;

      
    
      console.log("scene added");
      const allScenes = ReactPannellum.getAllScenes();
          console.log("Scenes added:", allScenes);
  
          if (!allScenes || Object.keys(allScenes).length === 0) {
              console.error("No scenes have been added");
          } else {
              console.log("Successfully registered scenes:", Object.keys(allScenes));
          }
    }

console.log("Current Scene ID being passed:", currentScene);
return (
  
  <div>

<ReactPannellum
    id="1"
    sceneId={currentScene}
    config={config}
    imageSource={currentImage}
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
