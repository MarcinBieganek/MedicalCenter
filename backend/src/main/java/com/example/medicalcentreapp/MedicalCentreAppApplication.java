package com.example.medicalcentreapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

@SpringBootApplication
public class MedicalCentreAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedicalCentreAppApplication.class, args);

	}

	public static Connection getConnection() throws SQLException{
		String jdbcURL = "jdbc:postgresql://localhost:5432/medical_centre";
		String username = "postgres";
		String password = "admin";
		Connection conn = DriverManager.getConnection(jdbcURL, username, password);
		System.out.println("Connected to DB");
		return conn;
	}

}
