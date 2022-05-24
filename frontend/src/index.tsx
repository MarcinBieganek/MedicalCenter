import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';


import App from './App';
import Admin from "./components/Admin";
import AddDoctor from './components/AddDoctor';
import Doctors from './components/Doctors';
import Doctor from './components/Doctor';
import AdminTimeMenager from './components/AdminTimeMenager';
import AdminAppointments from './components/AdminAppointments';
import Patient from "./components/Patient/Patient";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="admin" element={<Admin />} />
        <Route path="adddoctor" element={<AddDoctor />} />
        <Route path="doctors" element={<Doctors />}>
          <Route path=":doctorId" element={<Doctor />}>
            <Route path="time" element={<AdminTimeMenager />} />
            <Route path="appointments" element={<AdminAppointments />} />
          </Route>
        </Route>
        <Route path="patient" element={<Patient />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
