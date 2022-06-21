package com.example.medicalcentreapp.visit;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;

public class Visit {

    private Integer id;
    private String doctorPesel;
    private String patientPesel;
    private Boolean isBooked;
    private Timestamp startDate;
    private Timestamp endDate;
    private Date day;

    public Visit(Integer id, String doctorPesel, String patientPesel, Boolean isBooked, Timestamp startDate, Timestamp endDate, Date day) {
        this.id = id;
        this.doctorPesel = doctorPesel;
        this.patientPesel = patientPesel;
        this.isBooked = isBooked;
        this.startDate = startDate;
        this.endDate = endDate;
        this.day = day;
    }
    public Visit(){}

    public Integer getId() {
        return id;
    }

    public String getDoctorPesel() {
        return doctorPesel;
    }

    public String getPatientPesel() {
        return patientPesel;
    }

    public Boolean getBooked() {
        return isBooked;
    }

    public Timestamp getStartDate() {
        return startDate;
    }

    public Timestamp getEndDate() {
        return endDate;
    }

    public java.sql.Date getDay() {
        return new java.sql.Date(day.getTime());
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDoctorPesel(String doctorPesel) {
        this.doctorPesel = doctorPesel;
    }

    public void setPatientPesel(String patientPesel) {
        this.patientPesel = patientPesel;
    }

    public void setBooked(Boolean booked) {
        isBooked = booked;
    }

    public void setStartDate(Timestamp startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(Timestamp endDate) {
        this.endDate = endDate;
    }

    public void setDay(Date day) {
        this.day = day;
    }
}
