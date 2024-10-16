import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

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

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
            mapId: process.env.REACT_APP_MAP_ID // Add your Map ID here
          }}
      >
        { /* You can add markers or other components here */ }
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapComponent);