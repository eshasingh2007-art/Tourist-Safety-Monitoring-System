import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function TouristMap() {
  return (
    <MapContainer
      center={[28.6139, 77.2090]} // New Delhi
      zoom={12}
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "16px",
      }}
    >
      {/* Dark theme map */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {/* Tourist marker */}
      <Marker position={[28.6139, 77.2090]}>
        <Popup>📍 Tourist Location</Popup>
      </Marker>

      {/* Alert zone */}
      <Circle
        center={[28.6200, 77.2150]}
        radius={800}
        pathOptions={{ color: "red", fillOpacity: 0.2 }}
      >
        <Popup>⚠️ Alert Zone</Popup>
      </Circle>

      {/* Safe zone */}
      <Circle
        center={[28.6050, 77.2000]}
        radius={1000}
        pathOptions={{ color: "green", fillOpacity: 0.15 }}
      >
        <Popup>✅ Safe Zone</Popup>
      </Circle>
    </MapContainer>
  );
}
