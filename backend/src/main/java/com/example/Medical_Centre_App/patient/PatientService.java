package com.example.Medical_Centre_App.patient;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class PatientService {
    long counter = 4;

    Patient patient1 = new Patient("Pierwszy", "Pacjent");
    Patient patient2 = new Patient("Drugi", "Pacjent");
    Patient patient3 = new Patient("Trzeci", "Pacjent");
    List<Patient> patients = new ArrayList<>(Arrays.asList(patient1, patient2, patient3));

    public Patient getPatientById(String id) {
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
