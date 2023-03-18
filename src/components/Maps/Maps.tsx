import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "./leaflet.css";
import L from "leaflet";

const myIcon = L.icon({
  iconUrl: require("./locationPointer.png"),
  iconSize: [48, 48],
  // iconAnchor: [15, 15],
  // popupAnchor: [0, -15],
  // shadowUrl: 'path/to/my/icon-shadow.png',
  // shadowSize: [30, 30],
  // shadowAnchor: [15, 15]
});

export default function Maps() {
  const position: [number, number] = [54.5, 18.5];

  return (
    <div className="leaflet-container">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        maxBoundsViscosity={1.0}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}>
          <Popup>Tu jest nasza siedziba</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
