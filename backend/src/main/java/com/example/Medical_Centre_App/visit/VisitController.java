package com.example.Medical_Centre_App.visit;


import com.example.Medical_Centre_App.doctor.Doctor;
import com.example.Medical_Centre_App.doctor.DoctorService;
import com.example.Medical_Centre_App.visit.Visit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin
public class VisitController {

    @Autowired
    private VisitService visitService;

    @RequestMapping("/visit/{id}")
    public Visit getVisitById(@PathVariable long id) {
        return visitService.getVisitById(id);
    }


    @GetMapping("/visits")
    public List<Visit> getAllVisits() {
        return visitService.getAllVisits();
    }
}
