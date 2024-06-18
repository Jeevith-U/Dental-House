package com.devbrain.dentahouse.service;

import com.devbrain.dentahouse.entity.Patient;
import com.devbrain.dentahouse.exceptions.PatientNotFoundByIdException;
import com.devbrain.dentahouse.mapper.PatientMapper;
import com.devbrain.dentahouse.repository.PatientRepository;
import com.devbrain.dentahouse.requestdto.PatientRequest;
import com.devbrain.dentahouse.responsedto.PatientResponse;
import com.devbrain.dentahouse.util.PageResponseStructure;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PatientService {

    private final PatientRepository patientRepository;
    private final PatientMapper patientMapper;

    public ResponseEntity<PatientResponse> addPatient(PatientRequest patientRequest) {
        Patient patient = patientMapper.mapToPatient(patientRequest, new Patient());
//        patient.setRegisteredDate(LocalDate.now());
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

    public ResponseEntity<PatientResponse> updatePatient(PatientRequest patientRequest, String patientId) {
        return patientRepository.findById(patientId).map(patient -> {
            patientMapper.mapToPatient(patientRequest, patient);
            patient = patientRepository.save(patient);
            return ResponseEntity.ok(patientMapper.mapToPatientResponse(patient));
        }).orElseThrow(() -> new PatientNotFoundByIdException("Failed to update the patient"));
    }

    public ResponseEntity<PageResponseStructure<List<PatientResponse>>> getAllPatients(int page, int size) {
        List<PatientResponse> patients = patientRepository.findAll(PageRequest.of(page - 1, size))
                .map(patientMapper::mapToPatientResponse)
                .toList();

        long countOfPatients = patientRepository.count();
        long totalPages = countOfPatients / size;
        return ResponseEntity.status(HttpStatus.FOUND)
                .body(new PageResponseStructure<List<PatientResponse>>()
                        .setList(patients)
                        .setPage(page)
                        /*
                         * making sure that total pages returned is never zero
                         * if there are at least one patient int the database
                         */
                        .setTotalPages(totalPages == 0 && countOfPatients > 0 ? 1 : totalPages)
                        .setTotalAvailableRecords(countOfPatients));
    }
}
