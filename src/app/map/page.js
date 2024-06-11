"use client";

import { useEffect, useState } from "react";
import Map from "../components/map";
import StoreList from "../components/store-list";

export default function MapStores() {
  const [mockData, setMockData] = useState([]);
  const [coords, setCoords] = useState([4, -72]);

  useEffect(() => {
    fetch("/mock.json")
      .then((res) => res.json())
      .then((data) => setMockData(data));
  }, []);

  const processCoords = (coords) => {
    let coordinates = [coords.latitude, coords.longitude];
    setCoords([...coordinates]);
  };

  const geolocateUser = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        processCoords(position.coords);
      });
    } else {
      alert("Unable to locale user!");
    }
  };

  const selectedStore = (val) => {
    setCoords(mockData.find((x) => x.storeId == val).coordinates);
  };

  return (
    <>
      <div className="grid-map-list">
        <StoreList stores={mockData} selectedStore={(e) => selectedStore(e)} />
        <Map coords={coords} />
      </div>
      <button className="locate-me" onClick={geolocateUser}>Locate</button>
    </>
  );
}
