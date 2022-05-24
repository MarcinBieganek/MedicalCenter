package com.example.Medical_Centre_App.patient;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PatientService {
    long counter = 4;

    Patient patient1 = new Patient(1, "Pierwszy", "Pacjent");
    Patient patient2 = new Patient(2, "Drugi", "Pacjent");
    Patient patient3 = new Patient(3, "Trzeci", "Pacjent");
    List<Patient> patients = new ArrayList<>(Arrays.asList(patient1, patient2, patient3));

    public Patient getPatientById(long id) {
        for (Patient patient : patients) {
            if (patient.getId() == id) {
                return patient;
            }
        }
        return null;
    }

    public List<Patient> getAllPatients() {
        return patients;
    }

    public void addPatient(Patient patient) {
        patients.add(patient);
    }
}
