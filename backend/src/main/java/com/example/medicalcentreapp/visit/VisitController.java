package com.example.medicalcentreapp.visit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class VisitController {

    @Autowired
    private VisitService visitService;

    @GetMapping("/visits/{id}")
    public Visit getVisitById(@PathVariable String id) {
        return visitService.getVisitById(id);
    }

    @PostMapping("/visits")
    public void addVisit(@RequestBody Visit visit) {
        visitService.addVisit(visit);
    }

    @GetMapping("/visits/booked")
    public List<Visit> getAllBookedVisits() {
        return visitService.getAllBookedVisits();
    }

    @GetMapping("/visits/notbooked")
    public List<Visit> getAllUnbookedVisits() {
        return visitService.getAllUnbookedVisits();
    }

    @DeleteMapping("/visits/{id}")
    public void removeVisit(@PathVariable String id) {
        visitService.removeVisit(id);
    }

    @PutMapping("/visits/booked")
    public void bookVisit(@RequestParam String visitId, @RequestParam String patientId) {
        visitService.bookVisit(visitId, patientId);
    }

    @PutMapping("/visits/notbooked")
    public void unBookVisit(@RequestParam String visitId) {
        visitService.unBookVisit(visitId);
    }
}