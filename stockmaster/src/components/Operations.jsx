import React, { useState } from "react";

const Operations = () => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [operation, setOperation] = useState("Stock In");
  const [message, setMessage] = useState("");

  const operationId = "OP" + Date.now().toString().slice(-5);
  const totalValue = (Number(quantity) || 0) * (Number(price) || 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage(
      `✅ ${operation} recorded successfully for ${product}`
    );

    setProduct("");
    setQuantity("");
    setPrice("");
    setOperation("Stock In");
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "25px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#000000",          // 👈 added dark color
        }}
      >
        📦 Stock Operations
      </h2>

      <div
        style={{
          background: "#f4f4f4",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <p><strong>Operation ID:</strong> {operationId}</p>
        <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
        <p><strong>Time:</strong> {new Date().toLocaleTimeString()}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            📦 Product Name
          </label>

          <input
            type="text"
            placeholder="Enter Product Name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            🔢 Quantity
          </label>

          <input
            type="number"
            placeholder="Enter Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            💰 Unit Price
          </label>

          <input
            type="number"
            placeholder="Enter Unit Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            ⚙️ Operation Type
          </label>

          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          >
            <option>Stock In</option>
            <option>Stock Out</option>
          </select>
        </div>

        <div
          style={{
            background: "#eef6ff",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>📊 Summary</h3>
          <p>Quantity: {quantity || 0}</p>
          <p>Unit Price: ₹{price || 0}</p>
          <p>
            <strong>Total Value: ₹{totalValue}</strong>
          </p>
        </div>

        <button
          type="submit"
          style={{
            padding: "12px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Save Operation
        </button>
      </form>

      {message && (
        <div
          style={{
            marginTop: "20px",
            padding: "12px",
            background: "#d4edda",
            borderRadius: "8px",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Operations;