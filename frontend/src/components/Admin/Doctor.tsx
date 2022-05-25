import React, { useState, useEffect } from 'react';
import {Outlet, Link, useParams } from 'react-router-dom';
import IDoctor from '../../types/IDoctor';
import api from '../../services/backend';

export default function Doctor() {
    const params = useParams();
    const [doctor, setDoctor] = useState<IDoctor>();

    useEffect(() => {
        const getDoctor = async () => {
            try {
                const response = await api.get(`/doctor/${params.doctorId}`);
                setDoctor(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getDoctor();
    }, []);

    return (
        <main style={{padding: '1rem 0'}}>
            <h3>Doctor: {doctor?.firstName} {doctor?.lastName}</h3>
            <h4>Specjalizacja: {doctor?.spec}</h4>
            <Link to="time">Zarządzanie terminami</Link> |{' '}
            <Link to="appointments">Umówione wizyty</Link>
            <Outlet></Outlet>
        </main>
    );
}
