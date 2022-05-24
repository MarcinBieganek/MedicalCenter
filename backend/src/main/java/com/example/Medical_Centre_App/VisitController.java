package com.example.Medical_Centre_App;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class VisitController {

    @GetMapping("/visit")
    public Visit visit() {
        return new Visit(1, 2, 3, 4, 5, "11-05-2020");
    }
}
