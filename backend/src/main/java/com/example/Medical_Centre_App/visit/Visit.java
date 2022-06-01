package com.example.Medical_Centre_App.visit;

import com.example.Medical_Centre_App.doctor.Doctor;
import com.example.Medical_Centre_App.patient.Patient;

import java.util.UUID;

public class Visit {

    private final String id;
    private final Doctor doctor;
    private final Patient patient;
    private final String startTime;
    private final String endTime;
    private final String day;

    public Visit(Doctor doctor, Patient patient, String startTime, String endTime, String day) {
        this.id = UUID.randomUUID().toString().replaceAll("-", "");
        this.doctor = doctor;
        this.patient = patient;
        this.startTime = startTime;
        this.endTime = endTime;
        this.day = day;
    }

    public String getId() {
        return id;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    public String getStartTime() {
        return startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public String getDay() {
        return day;
    }
}
