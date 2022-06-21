package com.example.Medical_Centre_App.doctor;

import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import static com.example.Medical_Centre_App.MedicalCentreAppApplication.getConnection;
import static org.springframework.util.ObjectUtils.isEmpty;

@Service
public class DoctorService {

    //Doctor doctor1 = new Doctor("Lekarz", "Rodzinny", "rodzinny");
    //Doctor doctor2 = new Doctor("Doktor", "Inny", "chirurg");
    //Doctor doctor3 = new Doctor("Tomek", "Kowalski", "stomatolog");
    //List<Doctor> doctors = new ArrayList<>(Arrays.asList(doctor1, doctor2, doctor3));

    public Doctor getDoctorByPesel(String pesel) {
        Doctor p = new Doctor();
        try (Connection connection = getConnection()) {
            String query = " SELECT * FROM \"Doctor\" where pesel = ? ";
            PreparedStatement st = connection.prepareStatement(query);
            st.setString(1, pesel);
            try (ResultSet resultSet = st.executeQuery()) {
                while(resultSet.next()) {
                    String ps = resultSet.getString("PESEL");
                    String firstName = resultSet.getString("FirstName");
                    String lastName = resultSet.getString("LastName");
                    String spec = resultSet.getString("Speciality");
                    p.setPesel(ps);
                    p.setFirstName(firstName);
                    p.setLastName(lastName);
                    p.setSpec(spec);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return p;
    }

    public List<Doctor> getAllDoctors() {
        List<Doctor> doctors = new ArrayList<>();
        try (Connection connection = getConnection()) {
            try (Statement statement = connection.createStatement()) {
                try (ResultSet resultSet = statement.executeQuery(" SELECT * FROM \"Doctor\" ")) {
                    while(resultSet.next()) {
                        String ps = resultSet.getString("PESEL");
                        String firstName = resultSet.getString("FirstName");
                        String lastName = resultSet.getString("LastName");
                        String spec = resultSet.getString("Speciality");
                        Doctor p  = new Doctor(ps, firstName, lastName, spec);
                        doctors.add(p);
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
        return doctors;
    }

    public void addDoctor(Doctor doctor) {
        Doctor checkedDoctor = getDoctorByPesel(doctor.getPesel());
        if(!isEmpty(checkedDoctor)) {
            try (Connection connection = getConnection()) {
                PreparedStatement st = connection.prepareStatement(" INSERT INTO \"Doctor\" (\"FirstName\", \"LastName\", " +
                        " \"Speciality\", pesel) VALUES (?, ?, ?, ?) ");
                st.setString(1, doctor.getFirstName());
                st.setString(2, doctor.getLastName());
                st.setString(3, doctor.getSpec());
                st.setString(4, doctor.getPesel());
                st.executeUpdate();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    public void removeDoctor(String pesel) {
        try (Connection connection = getConnection()) {
            PreparedStatement st = connection.prepareStatement(" DELETE FROM \"Doctor\" WHERE pesel = ? ");
            st.setString(1, pesel);
            st.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void editDoctor(Doctor doctor) {
        try (Connection connection = getConnection()) {
            PreparedStatement st = connection.prepareStatement(" UPDATE \"Doctor\" SET \"PESEL\" = ? , " +
                            " \"FirstName\" = ? , \"SecondName\" = ? , \"Spec\" = ? WHERE \"PESEL\" = ? ");
            st.setString(1, doctor.getPesel());
            st.setString(2, doctor.getFirstName());
            st.setString(3, doctor.getSpec());
            st.setString(4, doctor.getLastName());
            st.setString(5, doctor.getPesel());
            st.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
