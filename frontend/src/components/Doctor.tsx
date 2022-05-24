import { Outlet, Link, useParams } from "react-router-dom";
import { getDoctor } from "../data";
import IDoctor from "../types/IDoctor";

export default function Doctor() {
    let params = useParams();
    let doctor = getDoctor(params.doctorId);

    return (
      <main style={{ padding: "1rem 0" }}>
        <h3>Doctor: {doctor?.firstName} {doctor?.lastName}</h3>
        <h4>Specjalizacja: {doctor?.spec}</h4>
        <Link to="time">Zarządzanie terminami</Link> |{" "}
        <Link to="appointments">Umówione wizyty</Link>
        <Outlet></Outlet>
      </main>
    );
  }