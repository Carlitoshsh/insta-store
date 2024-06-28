import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { icon } from "leaflet";

export default function Map({ coords, storeLocation }) {
  const ICON = icon({
    iconUrl: "/marker.png",
    iconSize: [32, 32],
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
      {storeLocation.map((store) => {
        return (
          <Marker
            key={"mar" + store.storeId}
            position={store.coordinates}
            icon={ICON}
          >
            <Popup>{store.storeName}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
