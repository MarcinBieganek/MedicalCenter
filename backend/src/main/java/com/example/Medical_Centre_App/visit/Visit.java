package com.example.Medical_Centre_App.visit;

public class Visit {

    private final long id;
    private final long doctorId;
    private final String doctorFirstName;
    private final String doctorLastName;
    private final long patientId;
    private final String patientFirstName;
    private final String patientLastName;
    private final String startTime;
    private final String endTime;
    private final String day;

    public Visit(long id, long doctorId, String doctorFirstName, String doctorLastName, long patientId, String patientFirstName, String patientLastName, String startTime, String endTime, String day) {
        this.id = id;
        this.doctorId = doctorId;
        this.doctorFirstName = doctorFirstName;
        this.doctorLastName = doctorLastName;
        this.patientId = patientId;
        this.patientFirstName = patientFirstName;
        this.patientLastName = patientLastName;
        this.startTime = startTime;
        this.endTime = endTime;
        this.day = day;
    }
}
