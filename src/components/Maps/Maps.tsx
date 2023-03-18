import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "./leaflet.css";

export default function Maps() {
  return (
    <div className="leaflet-container">
      <MapContainer
        center={[54.5, 18.5]}
        zoom={13}
        scrollWheelZoom={true}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[54.5, 18.5]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
