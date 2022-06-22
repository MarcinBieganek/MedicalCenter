package com.example.Medical_Centre_App.visit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class VisitController {

    @Autowired
    private VisitService visitService;

    @GetMapping("/visit/{id}")
    public Visit getVisitById(@PathVariable Integer id) {
        return visitService.getVisitById(id);
    }

    @GetMapping("/visit")
    public List<Visit> getVisits(@RequestParam(required=false) Boolean isBooked, @RequestParam(required=false) String doctorPesel, @RequestParam(required=false) String patientPesel) {
        return visitService.getVisits(isBooked, doctorPesel, patientPesel);
    }

    @PostMapping("/visit")
    public void addVisit(@RequestBody Visit visit) {
        visitService.addVisit(visit);
    }

    @DeleteMapping("/visit")
    public void removeDoctor(@RequestParam Integer visitId) {
        visitService.removeVisit(visitId);
    }

    @PutMapping("/visit/book")
    public void bookVisit(@RequestParam Integer visitId, @RequestParam String patientPesel) {
        visitService.bookVisit(visitId, patientPesel);
    }

    @PutMapping("/visit/unbook")
    public void unbookVisit(@RequestParam Integer visitId) {
        visitService.unbookVisit(visitId);
    }

}