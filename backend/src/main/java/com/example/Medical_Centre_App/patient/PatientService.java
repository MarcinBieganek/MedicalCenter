package com.example.Medical_Centre_App.patient;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;

import java.sql.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static com.example.Medical_Centre_App.MedicalCentreAppApplication.getConnection;
import static org.springframework.util.ObjectUtils.isEmpty;

@Service
public class PatientService {
    long counter = 4;

    Patient patient1 = new Patient("99047898452", "Pierwszy", "Pacjent");
    Patient patient2 = new Patient("99047898457", "Drugi", "Pacjent");
    Patient patient3 = new Patient("99047898458", "Trzeci", "Pacjent");
    //List<Patient> patients = new ArrayList<>(Arrays.asList(patient1, patient2, patient3));


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
        Patient checkedPatient = getPatientByPesel(patient.getPesel());
        if(!isEmpty(checkedPatient)) {
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
}
