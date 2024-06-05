package com.devbrain.dentahouse.repository;

import com.devbrain.dentahouse.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoctorRepository extends JpaRepository<Doctor, String> {
}
