import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from 'leaflet';

export default function Map({ coords }) {
  const ICON = icon({
    iconUrl: "/marker.png",
    iconSize: [54, 54],
  });
  return (
    <MapContainer
      key={coords.join("-")}
      center={coords}
      zoom={10}
      scrollWheelZoom={false}
      style={{ widht: "100vw", height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coords} icon={ICON}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
