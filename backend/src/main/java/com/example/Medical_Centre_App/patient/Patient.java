package com.example.Medical_Centre_App.patient;

public class Patient {
    private final String id;
    private final String firstName;
    private final String lastName;

    public Patient(String id, String firstName, String lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public String getId() {
        return this.id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public String getLastName() {
        return this.lastName;
    }
}