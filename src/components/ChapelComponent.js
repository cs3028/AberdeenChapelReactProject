import React, { useEffect, useRef, useState } from 'react';


// Define container size and style for the map
const containerStyle = {
  width: '90%',
  height: '540px',
  margin: '20px auto',
  border: '0.2px solid rgba(0, 0, 0, 0.4)',
  borderRadius: '30px',
};

//Set the default center location (latitude and longitude)
const center = {
  lat: 57.164154,  
  lng: -2.101510, 
};

//Coordinates to isolate the Chapel
const bounds = {
  north: 57.164415, //North latitude boundary
  south: 57.163648, //South latitude boundary
  east: -2.100420,  //East longitude boundary
  west:  -2.102165,  //West longitude boundary
};

// Coordinates for the test marker
const testMarkerPosition = {
  lat: 57.164154,  //Latitude for marker
  lng: -2.101510,  //Longitude for marker
};

//Function to load all needed Google Maps script
function loadGoogleMapsScript(apiKey) {
  return new Promise((resolve, reject) => {
    if (typeof window.google === 'object' && window.google.maps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.onerror = () => reject(new Error('Google Maps script could not be loaded.'));
    script.onload = () => resolve();
    script.defer = true; //Fix to ensure script loads in order
    script.onerror = () => reject(new Error('Google Maps script could not be loaded.'));
    script.onload = () => {
      if (window.google && window.google.maps) {
        resolve();
      } else {
        reject(new Error('Google Maps did not fully load.'));
      }
    };
    document.head.appendChild(script);
  });
}

//Main Map Component
function MapComponent() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);  //Create variable to store state of user location
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const testInfoWindowRef = useRef(null);  //Creates a reference for the InfoWindow to track state
  const [userLocation, setUserLocation] = useState(center); //Create variable to track user location
  const [heading, setHeading] = useState(null);  //Creates state for users device orientation
  const userMarkerRef = useRef(null);  //Reference for the user location icon

  useEffect(() => {
    async function initMap() {
      try {
        //Loads the Google Maps API script dynamically
        await loadGoogleMapsScript(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

        //Ensures the `google` object is available
        if (!window.google) {
          throw new Error('Google Maps not available');
        }

        // Define the restricted bounds using the chapel coordinates
        const chapelBounds = new window.google.maps.LatLngBounds(
          { lat: bounds.south, lng: bounds.west },  
          { lat: bounds.north, lng: bounds.east }  
        );

        //Initializes the map with the restriction options
        const map = new window.google.maps.Map(mapRef.current, {
          center: userLocation,
          zoom: 16,     
          //restriction: {
            //latLngBounds: chapelBounds, 
            //strictBounds: true,       
          //},

          //Gets rid of points of interest
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels', 
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'transit', 
              elementType: 'labels.icon', 
              stylers: [{ visibility: 'off' }],
            },
            {
              featureType: 'road', 
              elementType: 'labels.icon', 
              stylers: [{ visibility: 'off' }],
            },
          ],
          disableDefaultUI: true,
        });

        mapInstanceRef.current = map;
        
        //Creation of custom icon for markers
        const customIcon = {
          url: 'images/StainedWindowNoBackground.png',
          scaledSize: new window.google.maps.Size(50, 50), // Size of the icon (optional)
        };

        //Adds the test marker to the map
        const marker = new window.google.maps.Marker({
        position: testMarkerPosition,  // Position of the marker (same as chapel center)
        map: map,                      // Attach the marker to the map
        title: 'Test Marker',          // Tooltip title when hovering over the marker
        icon: customIcon,
        });
        //Define the testInfoWindow content
        const testInfoWindowContent = `
          <div style="font-size: 14px; color: black;">
            <img src="images/InsideChapelWindow.webp" height=200px >
            <h3>The Chapel's Amazing Stained Glass Windows</h3>
            <p>(Short Description of Marker Information)</p>
            <a href="./app.js">Click Here For More Information</a>
          </div>
        `;

        //Creation of a test InfoWindow
        const testInfoWindow = new window.google.maps.InfoWindow({
          content: testInfoWindowContent,
        });

        // Add a click event listener to open the InfoWindow on marker click
        marker.addListener('click', () => {
          testInfoWindow.open(map, marker);
        });
        testInfoWindowRef.current = testInfoWindow;  //Store the InfoWindow in the ref

        // Add a click event listener on the map to close the InfoWindow when clicking anywhere on the map
        map.addListener('click', () => {
          if (testInfoWindowRef.current) {
            testInfoWindowRef.current.close();
          }
        });


        setIsLoaded(true);  //Set the map as loaded
      } catch (error) {
        console.error('Failed to load Google Maps:', error);
        setError('Failed to load Google Maps.');
      }
    }
    initMap();  // Initialize the map once on mount
  }, []);  // Empty array to ensure this only runs once


  //Use Effect to Constantly update centre of the map for user's location
  useEffect(() => {
    if (mapInstanceRef.current && userLocation) {
      //Centers the map on the user's location 
      mapInstanceRef.current.setCenter(userLocation);

      //Removes existing user marker if it exists
      if (userMarkerRef.current) {
        userMarkerRef.current.setMap(null);
      }

      //Define custom icon for the user marker
      const userIcon = {
        path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: "#4285F4",  // Google's blue color
          fillOpacity: 1,
          scale: 10,
          strokeColor: "#ffffff",
          strokeWeight: 2,
      };

      userMarkerRef.current = new window.google.maps.Marker({
        position: userLocation,
        map: mapInstanceRef.current,
        icon: userIcon,
      });

    }
  }, [userLocation]);  //Only re-runs when user moves

  //Use effect to check if browser supports geolocation, ask for user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.warn("Sorry, your location is needed for this experience");
        }
      );
    }
  }, []);  // Empty array to run this only once

  //Use effect listens for device orientation events for heading updates
  useEffect(() => {
    function handleOrientation(event) {
      //Use of `event.alpha` to get heading, normalized between 0 - 360 degrees
      if (event.alpha !== null) {
        setHeading(event.alpha);
      }
    }

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true);
    } else {
      console.warn("Device orientation not supported.");
    }

    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  if (error) {
    return <div>{error}</div>; //Display error if loading fails
  }

  return (
    <div>
      {!isLoaded && <p>Loading map...</p>} {/* Show loading message */}
      <div ref={mapRef} style={containerStyle} /> {/* Map container */}
    </div>
  );
}

export default MapComponent;
