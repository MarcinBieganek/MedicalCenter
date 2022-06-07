package com.example.medicalcentreapp.patient;

import java.util.UUID;

public class Patient {
    private final String id;
    private final String firstName;
    private final String lastName;

    public Patient(String firstName, String lastName) {
        this.id = UUID.randomUUID().toString().replaceAll("-", "");
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