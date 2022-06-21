package com.example.medicalcentreapp.doctor;

public class Doctor {
    private String pesel;
    private String firstName;
    private String lastName;
    private String spec;

    public Doctor(){}

    public Doctor(String pesel, String firstName, String lastName, String spec) {
        this.pesel = pesel;
        this.firstName = firstName;
        this.lastName = lastName;
        this.spec = spec;
    }

    public String getPesel() {
        return this.pesel;
    }
    public void setPesel(String pesel){this.pesel = pesel;}

    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName){this.firstName = firstName;}

    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName){this.lastName = lastName;}

    public String getSpec() {
        return spec;
    }
    public void setSpec(String spec){this.spec = spec;}
}
