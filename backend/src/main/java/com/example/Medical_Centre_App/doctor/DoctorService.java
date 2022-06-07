package com.example.medicalcentreapp.doctor;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class DoctorService {

    Doctor doctor1 = new Doctor("Lekarz", "Rodzinny", "rodzinny");
    Doctor doctor2 = new Doctor("Doktor", "Inny", "chirurg");
    Doctor doctor3 = new Doctor("Tomek", "Kowalski", "stomatolog");
    List<Doctor> doctors = new ArrayList<>(Arrays.asList(doctor1, doctor2, doctor3));

    public Doctor getDoctorById(String id) {
        for(Doctor doctor : doctors) {
            if (id.equals(doctor.getId())) {
                return doctor;
            }
        }
        return null;
    }

    public List<Doctor> getAllDoctors() {
        return doctors;
    }

    public void addDoctor(Doctor doctor) {
        doctors.add(doctor);
    }

    public void removeDoctor(String doctorId) {
        for (int i = 0; i < doctors.size(); i++) {
            if (doctors.get(i).getId().equals(doctorId)) {
                this.doctors.remove(i);
            }
        }
    }

    public void editDoctor(Doctor doctor) {
        removeDoctor(doctor.getId());
        addDoctor(doctor);
    }
}
