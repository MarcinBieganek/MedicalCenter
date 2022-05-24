import { Outlet, Link } from "react-router-dom";
import { getDoctors } from "../../data";
import IDoctor from "../../types/IDoctor";

export default function Admin() {
  let doctors = getDoctors();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Admin</h2>
      <Link to="/adddoctor">Dodaj lekarza</Link>
      <h3>Lekarze:</h3>
      <nav>
          {doctors.map((doctor: IDoctor) => (
              <Link style={{display: "block", margin: "1rem 0"}}
              to={`/doctors/${doctor.id}`}
              key={doctor.id}
              >
                  {doctor.firstName} {doctor.lastName}
              </Link>
          ))}
      </nav>
    </main>
  );
}