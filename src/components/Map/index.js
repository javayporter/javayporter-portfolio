import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./index.scss";

const Map = () => {
  return (
    <div className="map">
      <MapContainer center={[44.96366, 19.61045]} zoom={13}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[44.96366, 19.61045]}>
          <Popup>Test Marker</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
