import React, { useState, useEffect } from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Info, Camera, Map, ChevronRight, Circle } from 'lucide-react';

const ChapelTour = () => {
  const [currentLocation, setCurrentLocation] = useState('entrance');
  const [showInfo, setShowInfo] = useState(false);
  const [currentInfo, setCurrentInfo] = useState(null);
  const [deviceSupport, setDeviceSupport] = useState({ ar: false, webgl: false });

  // Sample chapel data - replace with your actual chapel information
  const chapelData = {
    entrance: {
      title: "Chapel Entrance",
      description: "Gothic archway entrance dating to 1450",
      points: [
        { id: 1, title: "Main Door", description: "Original oak doors with hand-forged ironwork" },
        { id: 2, title: "Stone Carvings", description: "Medieval stone carvings depicting saints" }
      ],
      connections: ['nave']
    },
    nave: {
      title: "Main Nave",
      description: "Central worship space with vaulted ceiling",
      points: [
        { id: 3, title: "Stained Glass Windows", description: "15th century stained glass depicting biblical scenes" },
        { id: 4, title: "Wooden Pews", description: "Original oak pews from the 16th century" }
      ],
      connections: ['entrance', 'altar', 'transept']
    },
    altar: {
      title: "High Altar",
      description: "Marble altar with gilded reredos",
      points: [
        { id: 5, title: "Altar Stone", description: "Consecrated marble altar from 1486" },
        { id: 6, title: "Reredos", description: "Gold-leaf decorated screen showing the Life of Christ" }
      ],
      connections: ['nave']
    },
    transept: {
      title: "North Transept",
      description: "Side chapel with memorial tombs",
      points: [
        { id: 7, title: "Memorial Tombs", description: "Medieval knight effigies and tomb chests" },
        { id: 8, title: "Rose Window", description: "Circular stained glass window from 1520" }
      ],
      connections: ['nave']
    }
  };

  // Check device capabilities on mount
  useEffect(() => {
    const checkSupport = async () => {
      const arSupported = 'xr' in navigator;
      const webglSupported = (() => {
        try {
          const canvas = document.createElement('canvas');
          return !!(window.WebGLRenderingContext && 
            (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch(e) {
          return false;
        }
      })();
      
      setDeviceSupport({ ar: arSupported, webgl: webglSupported });
    };
    
    checkSupport();
  }, []);

  // Placeholder image for locations
  const getLocationImage = (location) => `/api/placeholder/800/600`;

  const handleLocationChange = (newLocation) => {
    setCurrentLocation(newLocation);
    setShowInfo(false);
  };

  const handleInfoPoint = (point) => {
    setCurrentInfo(point);
    setShowInfo(true);
  };

  return (
    <div className="relative h-screen w-full bg-gray-900">
      {/* Main view */}
      <div className="relative h-full">
        {/* Location image */}
        <img 
          src={getLocationImage(currentLocation)} 
          alt={chapelData[currentLocation].title}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
          <h2 className="text-white text-xl mb-2">{chapelData[currentLocation].title}</h2>
          <p className="text-gray-200 mb-4">{chapelData[currentLocation].description}</p>
          
          <div className="flex space-x-2">
            {chapelData[currentLocation].connections.map((location) => (
              <button
                key={location}
                onClick={() => handleLocationChange(location)}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-white flex items-center"
              >
                <Map className="w-4 h-4 mr-2" />
                {chapelData[location].title}
                <ChevronRight className="w-4 h-4 ml-2" />
              </button>
            ))}
          </div>
        </div>

        {/* Information points overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0">
          {chapelData[currentLocation].points.map((point) => (
            <button
              key={point.id}
              onClick={() => handleInfoPoint(point)}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(point.id % 3) * 30 + 20}%`,
                top: `${Math.floor(point.id / 3) * 30 + 20}%`
              }}
            >
              <Circle className="w-8 h-8 text-white animate-pulse" />
            </button>
          ))}
        </div>
      </div>

      {/* Information modal */}
      {showInfo && currentInfo && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
          <Alert className="bg-white">
            <Info className="w-4 h-4" />
            <AlertTitle>{currentInfo.title}</AlertTitle>
            <AlertDescription>{currentInfo.description}</AlertDescription>
          </Alert>
        </div>
      )}

      {/* AR mode button */}
      {deviceSupport.ar && (
        <button
          className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full"
          onClick={() => {/* AR mode implementation */}}
        >
          <Camera className="w-6 h-6 text-white" />
        </button>
      )}
    </div>
  );
};

export default ChapelTour;
