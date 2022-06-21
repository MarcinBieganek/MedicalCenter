package com.example.medicalcentreapp.patient;

import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import static com.example.medicalcentreapp.MedicalCentreAppApplication.getConnection;

@Service
public class PatientService {
    long counter = 4;

    public Patient getPatientByPesel(String pesel) {
        Patient p = new Patient();
        try (Connection connection = getConnection()) {
            String query = " SELECT * FROM \"Patient\" where pesel = ? ";
            PreparedStatement st = connection.prepareStatement(query);
            st.setString(1, pesel);
            try (ResultSet resultSet = st.executeQuery()) {
                while(resultSet.next()) {
                    String ps = resultSet.getString("PESEL");
                    String firstName = resultSet.getString("FirstName");
                    String lastName = resultSet.getString("LastName");
                    p.setPesel(ps);
                    p.setFirstName(firstName);
                    p.setLastName(lastName);
                    //p = new Patient(ps, firstName, lastName);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    return p;
    }

    public List<Patient> getAllPatients() {
        List<Patient> patients = new ArrayList<>();
        try (Connection connection = getConnection()) {
            try (Statement statement = connection.createStatement()) {
                try (ResultSet resultSet = statement.executeQuery(" SELECT * FROM \"Patient\" ")) {
                    while(resultSet.next()) {
                        String ps = resultSet.getString("PESEL");
                        String firstName = resultSet.getString("FirstName");
                        String lastName = resultSet.getString("LastName");
                        Patient p  = new Patient(ps, firstName, lastName);
                        patients.add(p);
                    }
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }

        } catch (SQLException ex) {
            ex.printStackTrace();
        }
        return patients;
    }

    public void addPatient(Patient patient) {
        try (Connection connection = getConnection()) {
            PreparedStatement st = connection.prepareStatement(" INSERT INTO \"Patient\" (\"FirstName\", \"LastName\", " +
                        "pesel) VALUES (?, ?, ?) ");
            st.setString(1, patient.getFirstName());
            st.setString(2, patient.getLastName());
            st.setString(3, patient.getPesel());
            st.executeUpdate();
    } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
