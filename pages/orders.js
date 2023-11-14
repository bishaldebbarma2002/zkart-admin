import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStatusChanged, setIsStatusChanged] = useState(false);
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancel",
  ]);

  useEffect(() => {
    setIsLoading(true);
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/api/orders");
      const fetchedOrders = response.data;

      const savedOrders = JSON.parse(localStorage.getItem("selectedOrders"));
      if (savedOrders) {
        const updatedOrders = fetchedOrders.map((order) => {
          const savedOrder = savedOrders.find((o) => o._id === order._id);
          if (savedOrder && savedOrder.status) {
            order.status = savedOrder.status;
          } else {
            order.status = ""; // Set a default status if not available
          }
          return order;
        });
        setOrders(updatedOrders);
      } else {
        setOrders(fetchedOrders);
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching orders:", error);
      setIsLoading(false);
    }
  };

  const handleStatusChange = (event, orderIndex) => {
    const selectedStatus = event.target.value;

    setOrders((prevOrders) => {
      const updatedOrders = [...prevOrders];
      updatedOrders[orderIndex].status = selectedStatus;
      return updatedOrders;
    });

    setIsStatusChanged(true);
  };

  const saveStatus = async () => {
    if (!isStatusChanged) {
      return;
    }

    setIsLoading(true);

    try {
      await axios.put("/api/orders", { orders });
      setIsStatusChanged(false);
      console.log("Status saved!");

      localStorage.setItem("selectedOrders", JSON.stringify(orders));
    } catch (error) {
      console.error("Error saving status:", error);
    }

    setIsLoading(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Not Process":
        return "";
      case "Processing":
        return "text-yellow-500";
      case "Shipped":
        return "text-blue-500";
      case "Delivered":
        return "text-green-500";
      case "Cancel":
        return "text-red-500";
      default:
        return "";
    }
  };

  return (
    <Layout>
      <h1>Orders</h1>
      <table className="basic">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Paid</th>
            <th>Recipient</th>
            <th>Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={6}>
                <div className="py-4">
                  <Spinner fullWidth={true} />
                </div>
              </td>
            </tr>
          ) : (
            orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
                <td className={order.paid ? "text-green-500" : "text-red-500"}>
                  {order.paid ? "YES" : "NO"}
                </td>
                <td>
                  {order.name} {order.email}
                  <br />
                  {order.city} {order.postalCode} {order.country}
                  <br />
                  {order.streetAddress}
                </td>
                <td>
                  {order.line_items.map((lineItem, index) => (
                    <div key={index}>
                      {lineItem.price_data?.product_data.name} x{" "}
                      {lineItem.quantity}
                    </div>
                  ))}
                </td>
                <td>
                  <select
                    value={order.status || ""}
                    onChange={(e) => handleStatusChange(e, index)}
                    style={{ width: "150px" }} // Adjust the width as needed
                    className={getStatusColor(order.status)}
                  >
                    <option value="">Select Status</option>
                    {status.map((s, i) => (
                      <option key={i} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div>
        <button
          onClick={saveStatus}
          className="btn-primary"
          disabled={!isStatusChanged}
        >
          Save Status
        </button>
      </div>
    </Layout>
  );
};

export default OrdersPage;
