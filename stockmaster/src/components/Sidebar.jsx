import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1> StockMaster</h1>

      <ul>
        <li><Link to="/">🏠 Dashboard</Link></li>
        <li><Link to="/products">📦 Products</Link></li>
        <li><Link to="/operations">🚚 Operations</Link></li>
        <li><Link to="/history">📜 History</Link></li>
        <li><Link to="/settings">⚙️ Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;