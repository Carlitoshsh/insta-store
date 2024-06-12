"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/map"), {
  ssr: false,
});
const StoreList = dynamic(() => import("../components/store-list"), {
  ssr: false,
});
const SimpleDialog = dynamic(() => import("../components/dialog-alert"), {
  ssr: false,
});
import { useSearchParams } from "next/navigation";

function distance(p1, p2) {
  const dx = p1[0] - p2[0];
  const dy = p1[1] - p2[1];
  return Math.sqrt(dx * dx + dy * dy);
}

export default function MapStores() {
  const [mockData, setMockData] = useState([]);
  const [coords, setCoords] = useState([4, -72]);
  const [dialogMsg, setDialogMsg] = useState();

  const params = useSearchParams();

  useEffect(() => {
    const getData = () => {
      fetch("/mock.json")
        .then((res) => res.json())
        .then((data) => {
          const coordinates = params.getAll("coordinates");
          if (coordinates) {
            data.sort(
              (obj1, obj2) =>
                distance(coordinates, obj1.coordinates) -
                distance(coordinates, obj2.coordinates)
            );
            setCoords(data?.[0]?.coordinates);
          }
          setMockData(data);
        });
    };
    getData();
  }, [params]);

  const processCoords = (coords) => {
    let userCoordinates = [coords.latitude, coords.longitude];
    const data = mockData.sort(
      (obj1, obj2) =>
        distance(userCoordinates, obj1.coordinates) -
        distance(userCoordinates, obj2.coordinates)
    );
    setMockData(data);
    setCoords([...userCoordinates]);
  };

  const geolocateUser = () => {
    setDialogMsg(null);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          processCoords(position.coords);
        },
        (err) => {
          setDialogMsg(err.message);
        }
      );
    } else {
      setDialogMsg("No geolocation library found in the browser");
    }
  };

  const selectedStore = (val) => {
    setCoords(mockData.find((x) => x.storeId == val).coordinates);
  };

  return (
    <>
      <div className="grid-map-list">
          <StoreList
            stores={mockData}
            selectedStore={(e) => selectedStore(e)}
          />
          <Map coords={coords} storeLocation={mockData} />
      </div>
      <button className="locate-me" onClick={geolocateUser}>
        📌 Near me!
      </button>
      {dialogMsg && <SimpleDialog text={dialogMsg} />}
    </>
  );
}
