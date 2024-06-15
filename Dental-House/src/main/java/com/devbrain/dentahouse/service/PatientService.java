package com.devbrain.dentahouse.service;

import com.devbrain.dentahouse.entity.Patient;
import com.devbrain.dentahouse.exceptions.PatientNotFoundByIdException;
import com.devbrain.dentahouse.mapper.PatientMapper;
import com.devbrain.dentahouse.repository.PatientRepository;
import com.devbrain.dentahouse.requestdto.PatientRequest;
import com.devbrain.dentahouse.responsedto.PatientResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class PatientService {

    private final PatientRepository patientRepository;
    private final PatientMapper patientMapper;

    public ResponseEntity<PatientResponse> addPatient(PatientRequest patientRequest) {
        Patient patient = patientMapper.mapToPatient(patientRequest, new Patient());
        patient = patientRepository.save(patient);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(patientMapper.mapToPatientResponse(patient));
    }

    public ResponseEntity<PatientResponse> getPatient(String patientId) {
        return patientRepository.findById(patientId).map(patient -> ResponseEntity
                .status(HttpStatus.FOUND)
                .body(patientMapper.mapToPatientResponse(patient)))
                .orElseThrow(() -> new PatientNotFoundByIdException("Failed to find the patient"));
    }
}
