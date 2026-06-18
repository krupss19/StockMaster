function Home() {
  return (
    <div className="dashboard">
      <h1>Inventory Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Total Products</h3>
          <p>1250</p>
        </div>

        <div className="card">
          <h3>Low Stock</h3>
          <p>25</p>
        </div>

        <div className="card">
          <h3>Orders</h3>
          <p>320</p>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <p>₹85,000</p>
        </div>
      </div>
    </div>
  );
}

export default Home;