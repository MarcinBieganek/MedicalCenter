package com.example.Medical_Centre_App.visit;

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

    @GetMapping("/visits")
    public List<Visit> getAllVisits() {
        return visitService.getAllVisits();
    }

    @RequestMapping(method=RequestMethod.POST, value="/visitadd")
    public void addVisit(@RequestBody Visit visit) {
        visitService.addVisit(visit);
    }

    @DeleteMapping("/visitdelete/{id}")
    public void removeVisit(@PathVariable String id) {
        visitService.removeVisit(id);
    }
}