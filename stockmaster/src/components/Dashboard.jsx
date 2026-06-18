function Dashboard() {
  return (
    <div>
      <div className="hero">
        {/* 👇 Added color: "#1e293b" to make the text dark */}
        <h1 style={{ color: "#edeff2" }}>📦 StockMaster</h1>
        <p>
          Smart Inventory & Warehouse Management System
        </p>
      </div>

      <div className="cards">
        <div className="card products">
          <h3>Total Products</h3>
          <p>1,250</p>
        </div>

        <div className="card revenue">
          <h3>Revenue</h3>
          <p>₹85,000</p>
        </div>

        <div className="card stock">
          <h3>Low Stock</h3>
          <p>25</p>
        </div>

        <div className="card delivery">
          <h3>Pending Deliveries</h3>
          <p>18</p>
        </div>
      </div>

      <div className="recent">
        <h2>Recent Inventory Activity</h2>

        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Steel Rod</td>
              <td>Receipt</td>
              <td>+100</td>
              <td>
                <span className="badge success">
                  Completed
                </span>
              </td>
            </tr>

            <tr>
              <td>Steel Chair</td>
              <td>Delivery</td>
              <td>-20</td>
              <td>
                <span className="badge warning">
                  Pending
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;