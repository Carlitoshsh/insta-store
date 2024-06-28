"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
      fetch("/order-mock.json")
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, []);

    return (
        <div className="flex-column overflow page-padding">
            <h3>Orders received from:</h3>
            {orders.map((order, i) => {
                return <div className="box flex-column" key={"order"+i}>
                    <span>{order.client_name}</span>
                    <Link href={{
                        pathname: '/map',
                        query: order
                    }}>Check</Link>
                </div>
            })}
        </div>
    )
}