package com.example.Medical_Centre_App.patient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PatientController {

    @Autowired
    private PatientService patientService;

    @RequestMapping("/patient/{pesel}")
    public Patient getPatientByPesel(@PathVariable String pesel) {
        return patientService.getPatientByPesel(pesel);
    }

    @GetMapping("/patients")
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    @RequestMapping(method= RequestMethod.POST, value="/patientadd")
    public void addPatient(@RequestBody Patient patient) {
        patientService.addPatient(patient);
    }
}