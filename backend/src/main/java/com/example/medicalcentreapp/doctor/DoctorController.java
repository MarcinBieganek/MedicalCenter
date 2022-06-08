package com.example.medicalcentreapp.doctor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @GetMapping("/doctors")
    public List<Doctor> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    @GetMapping("/doctors/{id}")
    public Doctor getDoctorById(@PathVariable String id) {
        return doctorService.getDoctorById(id);
    }

    @DeleteMapping("/doctors/{id}")
    public void removeDoctor(@PathVariable String id) {
         doctorService.removeDoctor(id);
    }

    @PostMapping("/doctors")
    public void addDoctor(@RequestBody Doctor doctor) {
        doctorService.addDoctor(doctor);
    }

    @PutMapping("/doctors/{id}")
    public void editDoctor(@PathVariable String id, @RequestBody Doctor doctor) {
        doctorService.editDoctor(doctor);
    }
}
