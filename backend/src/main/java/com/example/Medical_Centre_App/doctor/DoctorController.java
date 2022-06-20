package com.example.Medical_Centre_App.doctor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @RequestMapping("/doctor/{pesel}")
    public Doctor getDoctorByPesel(@PathVariable String pesel) {
        return doctorService.getDoctorByPesel(pesel);
    }

    @DeleteMapping("/doctordelete/{pesel}")
    public void removeDoctor(@PathVariable String pesel) {
         doctorService.removeDoctor(pesel);
    }

    @GetMapping("/doctors")
    public List<Doctor> getAllDoctors() {
        return doctorService.getAllDoctors();
    }

    @RequestMapping(method=RequestMethod.POST, value="/doctoradd")
    public void addDoctor(@RequestBody Doctor doctor) {
        doctorService.addDoctor(doctor);
    }

    @RequestMapping(method=RequestMethod.POST, value="/doctoredit")
    public void editDoctor(@RequestBody Doctor doctor) {
        doctorService.editDoctor(doctor);
    }
}
