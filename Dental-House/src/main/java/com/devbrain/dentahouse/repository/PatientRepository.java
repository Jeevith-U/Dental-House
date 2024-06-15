package com.devbrain.dentahouse.repository;

import com.devbrain.dentahouse.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository<Patient, String> {
}
