package com.devbrain.dentahouse.repository;

import com.devbrain.dentahouse.entity.Patient;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, String> {
	
	Optional<Patient> findByContactNumber(long contactNumber) ;
}
