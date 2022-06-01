package com.example.Medical_Centre_App.visit;

import com.example.Medical_Centre_App.doctor.Doctor;
import com.example.Medical_Centre_App.patient.Patient;

import java.util.UUID;

public class Visit {

    private final String id;
    private final String doctorId;
    private String patientId;
    private final String startTime;
    private final String endTime;
    private final String day;

    public Visit(String doctorId, String startTime, String endTime, String day) {
        this.id = UUID.randomUUID().toString().replaceAll("-", "");
        this.doctorId = doctorId;
        this.patientId = null;
        this.startTime = startTime;
        this.endTime = endTime;
        this.day = day;
    }

    public String getId() {
        return id;
    }

    public String getDoctorId() {
        return doctorId;
    }

    public String getPatientId() {
        return patientId;
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

    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }
}
