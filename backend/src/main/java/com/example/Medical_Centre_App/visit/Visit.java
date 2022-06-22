package com.example.Medical_Centre_App.visit;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.Date;

import org.hibernate.type.descriptor.java.JdbcTimeTypeDescriptor.TimeMutabilityPlan;

import com.fasterxml.jackson.annotation.JsonFormat;

public class Visit {

    private Integer id;
    private String doctorPesel;
    private String patientPesel;
    private Boolean isBooked;
    @JsonFormat(pattern = "HH:mm:ss")
    private Time startDate;
    @JsonFormat(pattern = "HH:mm:ss")
    private Time endDate;
    private Date day;

    public Visit(Integer id, String doctorPesel, String patientPesel, Boolean isBooked, Time startDate, Time endDate, Date day) {
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

    public java.sql.Time getStartDate() {
        return new java.sql.Time(endDate.getTime());
    }

    public java.sql.Time getEndDate() {
        return new java.sql.Time(endDate.getTime());
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

    public void setStartDate(Time startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(Time endDate) {
        this.endDate = endDate;
    }

    public void setDay(Date day) {
        this.day = day;
    }
}
