package com.example.Medical_Centre_App.visit;

public class Visit {

    private final long id;
    private final long doctorId;
    private final long patientId;
    private final int startTime;
    private final int endTime;
    private final String day;

    public Visit(long id, long doctorId, long patientId, int startTime, int endTime, String day) {
        this.id = id;
        this.doctorId = doctorId;
        this.patientId = patientId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.day = day;
    }

    public long getId() {
        return id;
    }

    public long getDoctorId() {
        return doctorId;
    }

    public long getPatientId() {
        return patientId;
    }

    public int getStartTime() {
        return startTime;
    }

    public int getEndTime() {
        return endTime;
    }

    public String getDay() {
        return day;
    }
}
