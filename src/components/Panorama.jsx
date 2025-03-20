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
  const [anteChapelPopupVisible, setAnteChapelPopupVisible] = useState(false);
  const [graffitiPopupVisible, setGraffitiPopupVisible] = useState(false);
  const [choirStallsPopupVisible, setChoirStallsPopupVisible] = useState(false);
  const [largePulpitPopupVisible, setLargePulpitPopupVisible] = useState(false);
  const [elphinstoneGravePopupVisible, setElphinstoneGravePopupVisible] = useState(false);
  const [chapelCeilingPopupVisible, setChapelCeilingPopupVisible] = useState(false);
  const [maryPopupVisible, setMaryPopupVisible] = useState(false);


  useEffect(() => {
    const isPopupOpen =
      stainedGlassPopupVisible ||
      organPopupVisible ||
      roodScreenPopupVisible ||
      warMemorialPopupVisible ||
      smallPulpitPopupVisible||
      graffitiPopupVisible ||
      choirStallsPopupVisible ||
      largePulpitPopupVisible ||
      elphinstoneGravePopupVisible ||
      chapelCeilingPopupVisible ||
      maryPopupVisible ||
      anteChapelPopupVisible;

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
                pitch: 40,
                yaw: 180,
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
                yaw: 200,
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
                pitch: -10,
                yaw: 300,
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
                pitch: 35,
                yaw: 320,
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
                pitch: 0,
                yaw: 180,
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
              pitch: 0,
              yaw: 180,
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
    setTimeout(() => {
        addHotspot();
    }, 1500); // Small delay to ensure Pannellum loads
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
            <p>The three panels depict key moments in the founding of King’s College. The first shows Bishop Elphinstone’s journey to Rome in 1495 to receive permission from Pope Alexander VI. The second illustrates his return and the start of construction in 1500, delayed by the need to secure the foundation with large cut trees. The final panel portrays the dedication of King’s College to James IV of Scotland, the Trinity, and the Virgin Mary, honoring the king’s crucial role in its establishment..</p>
            <div className="popup-buttons">
              <Link to="/stainedGlass" className="info-button">Learn more</Link>
              <button onClick={() => setStainedGlassPopupVisible(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

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

      {/* Organ Popup */}
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

      {/* Rood Screen Popup */}
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

      {/* War Memorial Popup */}
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

      {/* Small Pulpit Popup */}
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
    </div>
  );
}

export default Panorama;
