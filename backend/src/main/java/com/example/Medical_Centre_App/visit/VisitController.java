package com.example.Medical_Centre_App.visit;


import com.example.Medical_Centre_App.visit.Visit;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class VisitController {

    @GetMapping("/visit")
    public Visit visit() {
        return new Visit(1, 2, "Lekarz", "Rodzinny",  3, "Pacjent", "Pierwszy","10:00", "10:15", "11-05-2020");
    }

    @GetMapping("/visits")
    public List<Visit> getAllVisits() {
        Visit visit1 = new Visit(1, 1, "Lekarz", "Rodzinny",  3, "Pacjent", "Pierwszy", "10:00", "10:15", "11-05-2020");
        Visit visit2 = new Visit(10, 2, "Doktor", "Inny",  4, "Klient", "Drugi", "14:00", "14:30", "12-05-2020");
        Visit visit3 = new Visit(14, 2, "Doktor", "Inny",  3, "Pacjent", "Pierwszy", "16:20", "16:30", "11-05-2020");

        return Arrays.asList(visit1, visit2, visit3);
    }
}
