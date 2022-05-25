import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import IDoctor from '../../types/IDoctor';
import api from '../../services/backend';

export default function Admin() {
    const [doctors, setDoctors] = useState<IDoctor[]>([]);

    useEffect(() => {
        const getDoctors = async () => {
            try {
                const response = await api.get('/doctors');
                setDoctors(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getDoctors();
    }, []);

    return (
        <main style={{ padding: '1rem 0' }}>
            <h2>Admin</h2>
            <Link to="/adddoctor">Dodaj lekarza</Link>
            <h3>Lekarze:</h3>
            <nav>
                {doctors.map((doctor: IDoctor) => (
                    <Link
                        style={{ display: 'block', margin: '1rem 0' }}
                        to={`/doctors/${doctor.id}`}
                        key={doctor.id}
                    >
                        {doctor.firstName}
                        {' '}
                        {doctor.lastName}
                    </Link>
                ))}
            </nav>
        </main>
    );
}
