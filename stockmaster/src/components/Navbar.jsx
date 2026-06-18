function Navbar() {
  return (
    <div className="navbar">
      <div>
        <h2>📦 StockMaster</h2>
      </div>

      <div className="nav-right">
        <input
          type="text"
          placeholder="Search products..."
          className="search"
        />

        <button className="icon-btn">🔔</button>

        <div className="profile">
          <div className="avatar"></div>
          {/* 👇 Removed the <span>Admin</span> line */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;