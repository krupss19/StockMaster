import React, { useState } from "react";

const Settings = () => {
  const [companyName, setCompanyName] = useState("StockMaster");
  const [email, setEmail] = useState("info@stockmaster.com");  // default email added

  const [currency, setCurrency] = useState("USD");
  const [timezone, setTimezone] = useState("UTC");
  const [lowStockThreshold, setLowStockThreshold] = useState(10);
  const [defaultWarehouse, setDefaultWarehouse] = useState("Main Warehouse");
  const [enableNotifications, setEnableNotifications] = useState(true);
  const [dateFormat, setDateFormat] = useState("DD-MM-YYYY");

  const saveSettings = () => {
    alert("Settings Saved Successfully!");
    console.log({
      companyName,
      email,
      currency,
      timezone,
      lowStockThreshold,
      defaultWarehouse,
      enableNotifications,
      dateFormat,
    });
  };

  return (
    <div className="page-container" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      {/* 👇 Only change: added color: "#1e293b" to make the heading black */}
      <h2 style={{ marginBottom: "20px", color: "#1e293b" }}>⚙️ Settings</h2>

      <div
        className="settings-form"
        style={{
          background: "#fff",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        {/* General Section */}
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "8px", marginBottom: "16px" }}>
            General
          </h3>

          <div style={{ display: "grid", gap: "16px" }}>
            <div>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>
                Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
            </div>

            <div>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>
                Currency
              </label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="INR">INR (₹)</option>
                <option value="JPY">JPY (¥)</option>
              </select>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>
                Timezone
              </label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
              >
                <option value="UTC">UTC</option>
                <option value="EST">EST (Eastern Time)</option>
                <option value="CST">CST (Central Time)</option>
                <option value="PST">PST (Pacific Time)</option>
                <option value="IST">IST (India)</option>
                <option value="CET">CET (Central Europe)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Inventory Section */}
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "8px", marginBottom: "16px" }}>
            Inventory
          </h3>

          <div style={{ display: "grid", gap: "16px" }}>
            <div>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>
                Low Stock Threshold
              </label>
              <input
                type="number"
                value={lowStockThreshold}
                onChange={(e) => setLowStockThreshold(Number(e.target.value))}
                min="0"
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
              <small style={{ color: "#666" }}>Alert when stock falls below this number.</small>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>
                Default Warehouse
              </label>
              <input
                type="text"
                value={defaultWarehouse}
                onChange={(e) => setDefaultWarehouse(e.target.value)}
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
              />
            </div>
          </div>
        </div>

        {/* Notifications & Display Section */}
        <div style={{ marginBottom: "24px" }}>
          <h3 style={{ borderBottom: "1px solid #ddd", paddingBottom: "8px", marginBottom: "16px" }}>
            Notifications & Display
          </h3>

          <div style={{ display: "grid", gap: "16px" }}>
            <div>
              <label style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "bold" }}>
                <input
                  type="checkbox"
                  checked={enableNotifications}
                  onChange={(e) => setEnableNotifications(e.target.checked)}
                  style={{ width: "18px", height: "18px" }}
                />
                Enable Email Notifications
              </label>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "4px" }}>
                Date Format
              </label>
              <select
                value={dateFormat}
                onChange={(e) => setDateFormat(e.target.value)}
                style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
              >
                <option value="DD-MM-YYYY">DD-MM-YYYY</option>
                <option value="MM-DD-YYYY">MM-DD-YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>

        <button
          onClick={saveSettings}
          style={{
            padding: "10px 20px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;