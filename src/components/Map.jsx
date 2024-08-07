import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import React from "react";
function Map({ branches }) {
  const position = [30.05128, 31.39564];

  return (
    <MapContainer
      center={position}
      className="h-full z-0"
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {branches.map((city) => (
          <Marker
            position={[city.lng, city.lat]}
            key={city.id}
          >
            <Popup>
              <span>{city.place}</span>
            </Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}

export default Map;
