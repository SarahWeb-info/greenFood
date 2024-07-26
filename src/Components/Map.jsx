import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Define the Burj Khalifa location
const burjKhalifaLocation = [25.1972, 55.2744];

// Create a custom icon (optional)
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', // URL to default icon
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
});

const Map = () => (
  <MapContainer center={burjKhalifaLocation} zoom={15} style={{ height: '400px', width: '100%' }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={burjKhalifaLocation} icon={customIcon}>
      <Popup>
        Burj Khalifa<br /> Dubai, UAE
      </Popup>
    </Marker>
  </MapContainer>
);

export default Map;
