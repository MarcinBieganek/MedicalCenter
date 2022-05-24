package com.example.Medical_Centre_App.visit;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class VisitController {

    @GetMapping("/visit")
    public Visit visit() {
        return new Visit(1, 2, 3, 4, 5, "11-05-2020");
    }

    @GetMapping("/visits")
    public List<Visit> getAllVisits() {
        Visit visit1 = new Visit(1, 1, 2, 63, 552, "11-05-2020");
        Visit visit2 = new Visit(10, 2, 2, 23, 553, "12-05-2020");
        Visit visit3 = new Visit(14, 2, 8, 23, 52, "11-05-2020");

        return Arrays.asList(visit1, visit2, visit3);
    }
}
