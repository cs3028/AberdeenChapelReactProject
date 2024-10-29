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
    document.head.appendChild(script);
  });
}

//Main Map Component
function MapComponent() {
  const mapRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const testInfoWindowRef = useRef(null);  //Creates a reference for the InfoWindow to track state

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
          center: center,
          zoom: 16,     
          restriction: {
            latLngBounds: chapelBounds, 
            strictBounds: true,       
          },
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
        
        //Creation of custom icon for markers
        const customIcon = {
          url: 'images/Car.png',
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
            <img src="images/Car.png" height=30px >
            <h3>Cool Mclaren I Found</h3>
            <p>Test Marker Test Marker</p>
            <a href="./app.js">Click Here</a>
          </div>
        `;

        // Create an InfoWindow
        const testInfoWindow = new window.google.maps.InfoWindow({
          content: testInfoWindowContent,
        });

        // Add a click event listener to open the InfoWindow on marker click
        marker.addListener('click', () => {
          testInfoWindow.open(map, marker);
        });
        testInfoWindowRef.current = testInfoWindow;  // Store the InfoWindow in the ref

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

    initMap();
  }, []);  //Empty array ensures this effect runs only once when the component mounts

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
