import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Operations from "./components/Operations";
import MoveHistory from "./components/MoveHistory";
import Settings from "./components/Settings";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="main-area">
          <Navbar />

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/operations" element={<Operations />} />
              <Route path="/history" element={<MoveHistory />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;