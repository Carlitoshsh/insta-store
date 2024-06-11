import { useState } from "react";
import Pagination from "./pagination";

export default function StoreList({ stores, selectedStore }) {
  const [currentPage, setCurrentPage] = useState(1);
  const onChange = (page) => {
    setCurrentPage(page);
  };
  const limit = 10;
  return (
    <div className="store-container">
      <Pagination
        limit={limit}
        size={stores.length}
        onPageChange={(page) => onChange(page)}
      />
      <div className="stores">
        {stores
          .slice((currentPage - 1) * limit, currentPage * limit)
          .map((store) => {
            return (
              <div
                className="flex-column box store-item"
                key={store.storeId}
                onClick={() => selectedStore(store.storeId)}
              >
                <span className="bold">{store.storeName}</span>
                <span>{store.isOpen ? "Opened" : "Closed"}</span>
                {/* <span>{store.coordinates}</span> */}
                <span>{new Date(store.nextDeliveryTime).toLocaleString()}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
