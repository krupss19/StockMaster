import React from "react";

const MoveHistory = () => {
  const history = [
    {
      id: 1,
      product: "Laptop",
      quantity: 5,
      type: "Stock In",
      date: "18-06-2026",
    },
    {
      id: 2,
      product: "Mouse",
      quantity: 2,
      type: "Stock Out",
      date: "18-06-2026",
    },
    {
      id: 3,
      product: "Keyboard",
      quantity: 10,
      type: "Stock In",
      date: "17-06-2026",
    },
    {
      id: 4,
      product: "Monitor",
      quantity: 4,
      type: "Stock In",
      date: "17-06-2026",
    },
    {
      id: 5,
      product: "Printer",
      quantity: 1,
      type: "Stock Out",
      date: "16-06-2026",
    },
    {
      id: 6,
      product: "USB Drive",
      quantity: 20,
      type: "Stock In",
      date: "16-06-2026",
    },
    {
      id: 7,
      product: "Headphones",
      quantity: 6,
      type: "Stock Out",
      date: "15-06-2026",
    },
    {
      id: 8,
      product: "Webcam",
      quantity: 3,
      type: "Stock In",
      date: "15-06-2026",
    },
    {
      id: 9,
      product: "Router",
      quantity: 2,
      type: "Stock In",
      date: "14-06-2026",
    },
    {
      id: 10,
      product: "Projector",
      quantity: 1,
      type: "Stock Out",
      date: "14-06-2026",
    },
  ];

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#111827" }}>
        📋 Stock Movement History
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr
            style={{
              background: "#e5e7eb",
              color: "#111827",
              fontWeight: "bold",
            }}
          >
            <th style={{ padding: "12px" }}>ID</th>
            <th style={{ padding: "12px" }}>Product</th>
            <th style={{ padding: "12px" }}>Quantity</th>
            <th style={{ padding: "12px" }}>Operation</th>
            <th style={{ padding: "12px" }}>Date</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item) => (
            <tr
              key={item.id}
              style={{
                borderBottom: "1px solid #ddd",
                textAlign: "center",
              }}
            >
              <td style={{ padding: "10px", color: "#111827" }}>
                {item.id}
              </td>
              <td style={{ padding: "10px", color: "#111827" }}>
                {item.product}
              </td>
              <td style={{ padding: "10px", color: "#111827" }}>
                {item.quantity}
              </td>
              <td
                style={{
                  padding: "10px",
                  color: item.type === "Stock In" ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {item.type}
              </td>
              <td style={{ padding: "10px", color: "#111827" }}>
                {item.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoveHistory;