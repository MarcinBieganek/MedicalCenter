import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/admin">Admin</Link> |{" "}
        <Link to="/patient">Patient</Link>
      </nav>
    </div>
  );
}

export default App;
