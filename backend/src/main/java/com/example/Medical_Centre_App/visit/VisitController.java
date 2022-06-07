package com.example.medicalcentreapp.visit;

import com.example.Medical_Centre_App.patient.Patient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class VisitController {

    @Autowired
    private VisitService visitService;

    @RequestMapping("/visit/{id}")
    public Visit getVisitById(@PathVariable String id) {
        return visitService.getVisitById(id);
    }

    @GetMapping("/bookedvisits")
    public List<Visit> getAllBookedVisits() {
        return visitService.getAllBookedVisits();
    }

    @GetMapping("/unbookedvisits")
    public List<Visit> getAllUnbookedVisits() {
        return visitService.getAllUnbookedVisits();
    }

    @RequestMapping(method=RequestMethod.POST, value="/visitadd")
    public void addVisit(@RequestBody Visit visit) {
        visitService.addVisit(visit);
    }

    @DeleteMapping("/visitdelete/{id}")
    public void removeVisit(@PathVariable String id) {
        visitService.removeVisit(id);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/visitbook/")
    public void bookVisit(@RequestParam String visitId, @RequestParam String patientId) {
        visitService.bookVisit(visitId, patientId);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/visitunbook/")
    public void unBookVisit(@RequestParam String visitId) {
        visitService.unBookVisit(visitId);
    }
}