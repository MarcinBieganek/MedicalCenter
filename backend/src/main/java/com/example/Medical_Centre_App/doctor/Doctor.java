package com.example.Medical_Centre_App.doctor;

public class Doctor {
    private final long id;
    private final String firstName;
    private final String lastName;
    private final String spec;

    public Doctor(long id, String firstName, String lastName, String spec) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.spec = spec;
    }

    public long getId() {
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
