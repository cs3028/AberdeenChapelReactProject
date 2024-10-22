import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define container size and style
const containerStyle = {
  width: '80%',
  height: '600px',
  margin: '20px auto',
  border: '5px solid black',
};

// Set default location (latitude and longitude)
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

//Options for the map
const options = {
  restriction: {
    latLngBounds: bounds, //Restrict the map to the boundary
    strictBounds: true, //Set true to restrict the boundary
  },
};

const customIcon = {
  url: '/images/s-1400.jpg', // Custom icon URL
  //scaledSize: new window.google.maps.Size(100, 100), // Scaled size of the icon (width, height)
  //origin: new window.google.maps.Point(0, 0), // The origin point (0, 0) corresponds to the top-left corner
  //anchor: new window.google.maps.Point(25, 50), // The anchor point, placed at the bottom center
};



function MapComponent() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={options}
      >
        { /* You can add markers or other components here */ }
        <Marker 
        position={{lat: 57.164133, lng: -2.101531}}
        icon={customIcon}
        />

      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapComponent);