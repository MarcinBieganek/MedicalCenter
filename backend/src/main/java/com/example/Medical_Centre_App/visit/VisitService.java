package com.example.Medical_Centre_App.visit;

import org.springframework.stereotype.Service;

import java.sql.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static com.example.Medical_Centre_App.MedicalCentreAppApplication.getConnection;

@Service
public class VisitService {

    public Visit getVisitById(Integer id) {
        Visit v = new Visit();
        try (Connection connection = getConnection()) {
            String query = " SELECT * FROM \"Visit\" where id = ? ";
            PreparedStatement st = connection.prepareStatement(query);
            st.setInt(1, id);
            try (ResultSet resultSet = st.executeQuery()) {
                while(resultSet.next()) {
                    Integer newId = resultSet.getInt("id");;
                    String doctorPesel = resultSet.getString("DoctorPesel");;;
                    String patientPesel = resultSet.getString("PatientPesel");;;
                    Boolean isBooked = resultSet.getBoolean("isBooked");;;
                    Timestamp startDate = resultSet.getTimestamp("StartDate");;;
                    Timestamp endDate = resultSet.getTimestamp("EndDate");;;
                    Date day = resultSet.getDate("Day");;;
                    v.setId(newId);
                    v.setDoctorPesel(doctorPesel);
                    v.setPatientPesel(patientPesel);
                    v.setBooked(isBooked);
                    v.setStartDate(startDate);
                    v.setEndDate(endDate);
                    v.setDay(day);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return v;
    }

    public List<Visit> getVisits(Boolean booked, String dp, String pp) {
        List<Visit> visits = new ArrayList<>();
        try (Connection connection = getConnection()) {
            try (Statement statement = connection.createStatement()) {
                String query = " SELECT * FROM \"Visit\" WHERE ";
                Integer counter = 0;
                if (booked != null) {
                    query += " \"isBooked\" = ? ";
                    counter += 1;
                }
                if (dp != null) {
                    if (counter > 0) {
                        query += "AND";
                    }
                    query += " \"DoctorPesel\" = ? ";
                }
                if (pp != null) {
                    if (counter > 0) {
                        query += "AND";
                    }
                    query += " \"PatientPesel\" = ? ";
                }
                PreparedStatement st = connection.prepareStatement(query);
                Integer index = 1;
                if (booked != null) {
                    st.setBoolean(index, booked);
                    index += 1;
                }
                if (dp != null) {
                    st.setString(index, dp);
                    index += 1;
                }
                if (pp != null) {
                    st.setString(index, pp);
                }
                try (ResultSet resultSet = st.executeQuery()) {
                    while(resultSet.next()) {
                        Integer newId = resultSet.getInt("id");
                        String doctorPesel = resultSet.getString("DoctorPesel");
                        String patientPesel = resultSet.getString("PatientPesel");
                        Boolean isBooked = resultSet.getBoolean("isBooked");
                        Timestamp startDate = resultSet.getTimestamp("StartDate");
                        Timestamp endDate = resultSet.getTimestamp("EndDate");
                        Date day = resultSet.getDate("Day");
                        Visit v = new Visit(newId, doctorPesel, patientPesel, isBooked, startDate, endDate, day);
                        visits.add(v);
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
        return visits;
    }

    public void addVisit(Visit visit) {
        try (Connection connection = getConnection()) {
            PreparedStatement st = connection.prepareStatement(" INSERT INTO \"Visit\" (\"id\", \"DoctorPesel\", " +
                    "\"PatientPesel\", \"isBooked\", \"StartDate\", \"EndDate\", " +
                    "Day) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ");
            st.setInt(1, visit.getId());
            st.setString(2, visit.getDoctorPesel());
            st.setString(3, visit.getPatientPesel());
            st.setBoolean(4, visit.getBooked());
            st.setTimestamp(5, visit.getStartDate());
            st.setTimestamp(6, visit.getEndDate());
            st.setDate(7, visit.getDay());
            st.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void removeVisit(Integer visitId) {
        try (Connection connection = getConnection()) {
            PreparedStatement st = connection.prepareStatement(" DELETE FROM \"Visit\" WHERE id = ? ");
            st.setInt(1, visitId);
            st.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void bookVisit(Integer visitId) {
        try (Connection connection = getConnection()) {
            PreparedStatement st = connection.prepareStatement(" UPDATE \"Visit\" SET \"isBooked\" = ? WHERE id = ? ");
            st.setBoolean(1, true);
            st.setInt(2, visitId);
            st.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void unbookVisit(Integer visitId) {
        try (Connection connection = getConnection()) {
            PreparedStatement st = connection.prepareStatement(" UPDATE \"Visit\" SET \"isBooked\" = ? WHERE id = ? ");
            st.setBoolean(1, false);
            st.setInt(2, visitId);
            st.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
