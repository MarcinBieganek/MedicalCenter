package com.example.Medical_Centre_App.visit;

import com.example.Medical_Centre_App.doctor.Doctor;
import com.example.Medical_Centre_App.patient.Patient;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class VisitService {

    Doctor doctor = new Doctor("Lekarz", "Rodzinny", "rodzinny");
    Patient patient = new Patient(1, "Pierwszy", "Pacjent");

    Visit visit1 = new Visit(doctor, patient, "10:00", "10:15", "11-05-2020");
    Visit visit2 = new Visit(doctor, patient, "14:00", "14:30", "12-05-2020");
    Visit visit3 = new Visit(doctor, patient, "16:20", "16:30", "11-05-2020");
    List<Visit> visits = new ArrayList<>(Arrays.asList(visit1, visit2, visit3));

    public Visit getVisitById(String id) {
        for (Visit visit : visits) {
            if (visit.getId().equals(id)) {
                return visit;
            }
        }
        return null;
    }

    public List<Visit> getAllVisits() {
        return visits;
    }

    public void addVisit(Visit visit) {
        visits.add(visit);
    }

    public void removeVisit(String visitId) {
        for (int i = 0; i < visits.size(); i++) {
            if (visits.get(i).getId().equals(visitId)) {
                this.visits.remove(i);
            }
        }
    }

}
