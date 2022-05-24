package com.example.Medical_Centre_App.visit;

import com.example.Medical_Centre_App.doctor.Doctor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class VisitService {

    Visit visit1 = new Visit(1, 1, "Lekarz", "Rodzinny",  3, "Pacjent", "Pierwszy", "10:00", "10:15", "11-05-2020");
    Visit visit2 = new Visit(10, 2, "Doktor", "Inny",  4, "Klient", "Drugi", "14:00", "14:30", "12-05-2020");
    Visit visit3 = new Visit(14, 2, "Doktor", "Inny",  3, "Pacjent", "Pierwszy", "16:20", "16:30", "11-05-2020");
    List<Visit> visits = Arrays.asList(visit1, visit2, visit3);

    public Visit getVisitById(long id) {
        for (Visit visit : visits) {
            if (visit.getId() == id) {
                return visit;
            }
        }
        return null;
    }

    public List<Visit> getAllVisits() {
        return visits;
    }

}
