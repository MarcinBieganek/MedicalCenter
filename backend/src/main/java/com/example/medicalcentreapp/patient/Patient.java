package com.example.medicalcentreapp.patient;

public class Patient {
    private String pesel;
    private String firstName;
    private String lastName;

    public Patient(String pesel, String firstName, String lastName) {
        this.pesel = pesel;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public Patient(){}

    public String getPesel() {
        return this.pesel;
    }
    public void setPesel(String pesel) {
        this.pesel = pesel;
    }

    public String getFirstName() {
        return this.firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}