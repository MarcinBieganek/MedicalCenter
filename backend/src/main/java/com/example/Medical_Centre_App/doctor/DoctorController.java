package com.example.Medical_Centre_App.doctor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @RequestMapping("/doctor/{id}")
    public Doctor getDoctorById(@PathVariable String id) {
        return doctorService.getDoctorById(id);
    }

    @GetMapping("/doctors")
    public List<Doctor> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    @RequestMapping(method=RequestMethod.POST, value="/doctoradd")
    public void addDoctor(@RequestBody Doctor doctor) {
        doctorService.addDoctor(doctor);
    }
}
