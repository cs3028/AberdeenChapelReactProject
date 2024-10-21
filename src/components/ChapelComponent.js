import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define container size and style
const containerStyle = {
  width: '100%',
  height: '600px',
};

// Set default location (latitude and longitude)
const center = {
  lat: 57.1657,
  lng: -2.1017,
};


//Coordinates to isolate the Chapel
const bounds = {
  north: 57.164250, //North latitude boundary
  south: 57.163938, //South latitude boundary
  east: -2.100914,  //East longitude boundary
  west:  -2.101950,  //West longitude boundary
};

//Options for the map
const options = {
  restriction: {
    latLngBounds: bounds, //Restrict the map to the boundary
    strictBounds: true, //Set true to restrict the boundary
  },
};

//Test marker
const testMarkerPosition = {
  lat: 57.164133,  
  lng: -2.101531,  
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
          position={testMarkerPosition} //Position of the marker
          title="Test Marker"          //Tooltip title when hovering over the marker
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapComponent);