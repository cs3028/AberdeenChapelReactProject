import React, { useEffect, useRef, useState } from 'react';

const containerStyle = {
  width: '90%',
  height: '540px',
  margin: '20px auto',
  border: '0.2px solid rgba(0, 0, 0, 0.4)',
  borderRadius: '30px',
};

const center = {
  lat: 57.164154,  
  lng: -2.101510, 
};

const bounds = {
  north: 57.164415, 
  south: 57.163648, 
  east: -2.100420,  
  west: -2.102165,  
};

const testMarkerPosition = {
  lat: 57.164154,
  lng: -2.101510,
};

//Function to load Google Maps script with callback
function loadGoogleMapsScript(apiKey) {
  return new Promise((resolve, reject) => {
    if (typeof window.google === 'object' && window.google.maps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=places`;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Google Maps script could not be loaded.'));
    document.head.appendChild(script);
  });
}

function MapComponent() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const testInfoWindowRef = useRef(null);
  const [userLocation, setUserLocation] = useState(center);
  const [heading, setHeading] = useState(null);
  const userMarkerRef = useRef(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  //Separate function to initialize the map
  const initMap = () => {
    if (!window.google || !window.google.maps) {
      setError('Google Maps not available');
      return;
    }

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

    const customIcon = {
      url: 'images/StainedWindowNoBackground.png',
      scaledSize: new window.google.maps.Size(50, 50),
    };

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
  };

  useEffect(() => {
    window.initMap = initMap; // Set the global callback function for the Google Maps script
    loadGoogleMapsScript(process.env.REACT_APP_GOOGLE_MAPS_API_KEY).catch((error) => {
      console.error('Failed to load Google Maps:', error);
      setError('Failed to load Google Maps.');
    });

    return () => {
      window.initMap = undefined; // Cleanup the global callback after component unmounts
    };
  }, []);

  useEffect(() => {
    if (mapInstanceRef.current && userLocation) {
      mapInstanceRef.current.setCenter(userLocation);

      if (userMarkerRef.current) {
        userMarkerRef.current.setMap(null);
      }

      const userIcon = {
        path: `M 0,-15 L 8,10 L 0,3 L -8,10 Z M 0,-10 L 4,5 L 0,2 L -4,5 Z`,
        fillColor: '#000000',
        fillOpacity: 1,
        scale: 1,
        strokeColor: '#000000',
        strokeWeight: 1,
        rotation: heading || 0,
        anchor: new window.google.maps.Point(0, 0),
      };

      userMarkerRef.current = new window.google.maps.Marker({
        position: userLocation,
        map: mapInstanceRef.current,
        icon: userIcon,
      });
    }
  }, [userLocation, heading]);

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

  const handlePermissionRequest = async () => {
    if (
      typeof DeviceOrientationEvent !== 'undefined' &&
      typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
      try {
        const permission = await DeviceOrientationEvent.requestPermission();
        if (permission === 'granted') {
          setPermissionGranted(true);
          window.addEventListener('deviceorientation', handleOrientation, true);
        } else {
          console.warn('Device orientation permission denied.');
        }
      } catch (error) {
        console.error('Error requesting device orientation permission:', error);
      }
    } else {
      setPermissionGranted(true);
      window.addEventListener('deviceorientation', handleOrientation, true);
    }
  };

  const handleOrientation = (event) => {
    if (event.alpha !== null) {
      setHeading(event.alpha);
    }
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {!isLoaded && <p>Loading map...</p>}
      {!permissionGranted && (
        <button onClick={handlePermissionRequest}>Enable Compass</button>
      )}
      <div ref={mapRef} style={containerStyle} />
    </div>
  );
}

export default MapComponent;
