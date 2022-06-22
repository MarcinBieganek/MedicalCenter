package com.example.Medical_Centre_App.doctor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping("/doctor/{pesel}")
    public Doctor getDoctorByPesel(@PathVariable String pesel) {
        return doctorService.getDoctorByPesel(pesel);
    }

    @DeleteMapping("/doctor/{pesel}")
    public void removeDoctor(@PathVariable String pesel) {
         doctorService.removeDoctor(pesel);
    }

    @GetMapping("/doctor")
    public List<Doctor> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    @PostMapping("/doctor")
    public ResponseEntity<Doctor> addDoctor(@RequestBody Doctor doctor) {
        Doctor addedDoctor = doctorService.addDoctor(doctor);
        if (addedDoctor == null) {
            return new ResponseEntity<Doctor>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<Doctor>(addedDoctor, HttpStatus.CREATED); 
    }

    @PutMapping("/doctor")
    public void editDoctor(@RequestBody Doctor doctor) {
        doctorService.editDoctor(doctor);
    }
}
