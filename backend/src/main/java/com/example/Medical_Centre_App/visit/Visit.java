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
    private String startDate;
    private String endDate;
    private String day;

    public Visit(Integer id, String doctorPesel, String patientPesel, Boolean isBooked, String startDate, String endDate, String day) {
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

    public String getStartDate() {
        return startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public String getDay() {
        return day;
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

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public void setDay(String day) {
        this.day = day;
    }
}
