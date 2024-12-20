import React, { useEffect, useRef, useState } from 'react';

//Define container size and style for the map
const containerStyle = {
  width: '90%',
  height: '540px',
  margin: '20px auto',
  border: '0.2px solid rgba(0, 0, 0, 0.4)',
  borderRadius: '30px',
};

//Set the center location of the Chapel
const center = {
  lat: 57.164154,  
  lng: -2.101510, 
};

//Coordinates to isolate the Chapel
const bounds = {
  north: 57.164415, // North latitude boundary
  south: 57.163648, // South latitude boundary
  east: -2.100420,  // East longitude boundary
  west: -2.102165,  // West longitude boundary
};

//Coordinates for test marker
const testMarkerPosition = {
  lat: 57.164154,  // Latitude for marker
  lng: -2.101510,  // Longitude for marker
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
    script.defer = true; //Fix to ensure script loads in order
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Google Maps script could not be loaded.'));
    document.head.appendChild(script);
  });
}

// Main Map Component
function MapComponent() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);  //Creates variable to store state of user location
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const testInfoWindowRef = useRef(null);  //Creates a reference for the InfoWindow to track state
  const [userLocation, setUserLocation] = useState(center); //Creates variable to track user location
  const [heading, setHeading] = useState(null);  //Creates state for user's device orientation
  const userMarkerRef = useRef(null);  // Reference for the user location icon

  useEffect(() => {
    async function initMap() {
      try {
        //Loads the Google Maps API script dynamically
        await loadGoogleMapsScript(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

        //Ensures the `google` object is available
        if (!window.google) {
          throw new Error('Google Maps not available');
        }

        //Defines the restricted bounds using the chapel coordinates
        const chapelBounds = new window.google.maps.LatLngBounds(
          { lat: bounds.south, lng: bounds.west },  
          { lat: bounds.north, lng: bounds.east }  
        );

        //Initialises the map with the restriction options
        const map = new window.google.maps.Map(mapRef.current, {
          center: userLocation,
          zoom: 16,     
          disableDefaultUI: true,
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
        });

        mapInstanceRef.current = map;
        
        //Custom icon for marker
        const customIcon = {
          url: 'images/StainedWindowNoBackground.png',
          scaledSize: new window.google.maps.Size(50, 50),
        };

        //Adds the test marker to the map
        const marker = new window.google.maps.Marker({
          position: testMarkerPosition,
          map: map,
          title: 'Test Marker',
          icon: customIcon,
        });

        const testInfoWindowContent = `
          <div style="font-size: 14px; color: black;">
            <img src="images/InsideChapelWindow.webp" height=200px >
            <h3>The Chapel's Amazing Stained Glass Windows</h3>
            <p>(Short Description of Marker Information)</p>
            <a href="./app.js">Click Here For More Information</a>
          </div>
        `;

        const testInfoWindow = new window.google.maps.InfoWindow({
          content: testInfoWindowContent,
        });

        marker.addListener('click', () => {
          testInfoWindow.open(map, marker);
        });
        testInfoWindowRef.current = testInfoWindow;

        map.addListener('click', () => {
          if (testInfoWindowRef.current) {
            testInfoWindowRef.current.close();
          }
        });

        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load Google Maps:', error);
        setError('Failed to load Google Maps.');
      }
    }
    initMap();
  }, []);

  //Updates map center based on user's location
  useEffect(() => {
    if (mapInstanceRef.current && userLocation) {
      mapInstanceRef.current.setCenter(userLocation);

      if (userMarkerRef.current) {
        userMarkerRef.current.setMap(null);
      }

      //Customer pointer user icon
      const userIcon = {
        path: `M 0,-15 L 8,10 L 0,3 L -8,10 Z M 0,-10 L 4,5 L 0,2 L -4,5 Z`,
        fillColor: '#000000',
        fillOpacity: 1,
        scale: 1,
        strokeColor: '#000000',
        strokeWeight: 1,
        anchor: new window.google.maps.Point(0, 0),
      };

      userMarkerRef.current = new window.google.maps.Marker({
        position: userLocation,
        map: mapInstanceRef.current,
        icon: userIcon,
      });
    }
  }, [userLocation, heading]);

  //Requests user location and updates the state
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.warn("Sorry, your location is needed for this experience");
        }
      );
    }
  }, []);


  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {!isLoaded && <p>Loading map...</p>}
      <div ref={mapRef} style={containerStyle} />
    </div>
  );
}

export default MapComponent;