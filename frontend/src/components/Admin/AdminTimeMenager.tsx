export default function AdminTimeMenager() {
    const lista = ["10.05.2022 9:00 - 15:00", "11.05.2022 9:00 - 14:00", "12.05.2022 11:00 - 15:00"];

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Admin Zarządzanie Terminami</h2>
        <button>Dodaj</button>
        {lista.map((e) => <div>
          <h4>
            {e}
            <button>Edytuj</button>
            <button>Usun</button>
          </h4>
        </div>)}
      </main>
    );
  }