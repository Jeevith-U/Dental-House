package com.devbrain.dentahouse.mapper;

import com.devbrain.dentahouse.entity.Patient;
import com.devbrain.dentahouse.requestdto.PatientRequest;
import com.devbrain.dentahouse.responsedto.PatientResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class PatientMapper {

    public Patient mapToPatient(PatientRequest patientRequest, Patient patient) {
        patient.setFirstName(patientRequest.getFirstName());
        patient.setLastName(patientRequest.getLastName());
        patient.setGender(patientRequest.getGender());
        patient.setBloodGroup(patientRequest.getBloodGroup());
        patient.setDateOfBirth(patientRequest.getDateOfBirth());
        patient.setContactNumber(patientRequest.getContactNumber());
        patient.setPreMedicalConditions(patientRequest.getPreMedicalConditions());
        patient.setNote(patientRequest.getNote());
        return patient;
    }

    public PatientResponse mapToPatientResponse(Patient patient) {
        return PatientResponse.builder()
                .patientId(patient.getPatientId())
                .bloodGroup(patient.getBloodGroup())
                .contactNumber(patient.getContactNumber())
                .dateOfBirth(patient.getDateOfBirth())
                .firstName(patient.getFirstName())
                .gender(patient.getGender())
                .lastName(patient.getLastName())
                .lastSittingDate(patient.getLastSittingDate())
                .note(patient.getNote())
                .preMedicalConditions(patient.getPreMedicalConditions())
                .registeredDate(patient.getRegisteredDate())
                .build();
    }
}
