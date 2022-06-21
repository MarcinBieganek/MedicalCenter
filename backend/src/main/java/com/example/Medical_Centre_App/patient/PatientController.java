package com.example.Medical_Centre_App.patient;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class PatientController {

    @Autowired
    private PatientService patientService;

    @RequestMapping("/patient/{pesel}")
    public ResponseEntity<Patient> getPatientByPesel(@PathVariable String pesel) {
        Patient foundPatient = patientService.getPatientByPesel(pesel);
        if (foundPatient == null) {
            return new ResponseEntity<Patient>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Patient>(foundPatient, HttpStatus.OK);
    }

    @GetMapping("/patients")
    public List<Patient> getAllPatients() {
        return patientService.getAllPatients();
    }

    @RequestMapping(method= RequestMethod.POST, value="/patientadd")
    public ResponseEntity<Patient> addPatient(@RequestBody Patient patient) {
        Patient addedPatient = patientService.addPatient(patient);
        if (addedPatient == null) {
            return new ResponseEntity<Patient>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<Patient>(addedPatient, HttpStatus.CREATED);
    }
}