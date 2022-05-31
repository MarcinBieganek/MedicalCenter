package com.example.Medical_Centre_App.doctor;

import java.util.UUID;

public class Doctor {
    private final String id;
    private final String firstName;
    private final String lastName;
    private final String spec;

    public Doctor(String firstName, String lastName, String spec) {
        this.id = UUID.randomUUID().toString().replaceAll("-", "");
        this.firstName = firstName;
        this.lastName = lastName;
        this.spec = spec;
    }

    public String getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getSpec() {
        return spec;
    }
}
