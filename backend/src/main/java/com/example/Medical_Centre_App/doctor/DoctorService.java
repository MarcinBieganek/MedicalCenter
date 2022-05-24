package com.example.Medical_Centre_App.doctor;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

import java.util.Arrays;
import java.util.List;

@Service
public class DoctorService {

    Doctor doctor1 = new Doctor(1,"Lekarz", "Rodzinny", "rodzinny");
    Doctor doctor2 = new Doctor(2,"Doktor", "Inny", "chirurg");
    Doctor doctor3 = new Doctor(3,"Tomek", "Kowalski", "stomatolog");
    List<Doctor> doctors = Arrays.asList(doctor1, doctor2, doctor3);

    public Doctor getDoctorById(long id) {
        for(Doctor doctor : doctors) {
            if (doctor.getId() == id) {
                return doctor;
            }
        }
        return null;
    }

    public List<Doctor> getAllDoctors() {
        return doctors;
    }
}
