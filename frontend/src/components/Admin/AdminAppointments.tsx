export default function AdminAppointments() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Admin Umówione Wizyty</h2>
        <div>
          <h4>10.05.2022</h4>
          <div>
            9:00 - 9:30 Pacjent 1 <button>Odwołaj</button>
          </div>
          <div>
            12:00 - 12:30 Pacjent 2 <button>Odwołaj</button>
          </div>
        </div>
        <div>
          <h4>11.05.2022</h4>
          <div>
            9:00 - 9:30 Pacjent 3 <button>Odwołaj</button>
          </div>
          <div>
            12:00 - 12:30 Pacjent 4 <button>Odwołaj</button>
          </div>
        </div>
      </main>
    );
  }