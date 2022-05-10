import { Outlet, Link } from "react-router-dom";

export default function Admin() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Admin</h2>
        <Link to="time">Zarządzanie terminami</Link> |{" "}
        <Link to="appointments">Umówione wizyty</Link>
        <Outlet></Outlet>
      </main>
    );
  }