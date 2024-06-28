package com.devbrain.dentahouse.mapper;

import com.devbrain.dentahouse.entity.Patient;
import com.devbrain.dentahouse.requestdto.PatientRequest;
import com.devbrain.dentahouse.responsedto.PatientDetailsResponse;
import com.devbrain.dentahouse.responsedto.PatientResponse;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class PatientDetailsMapper {

	/*
	 * public Patient mapToPatient(PatientRequest patientRequest, Patient patient) {
	 * patient.setFirstName(patientRequest.getFirstName());
	 * patient.setLastName(patientRequest.getLastName());
	 * patient.setGender(patientRequest.getGender());
	 * patient.setBloodGroup(patientRequest.getBloodGroup());
	 * patient.setDateOfBirth(patientRequest.getDateOfBirth());
	 * patient.setContactNumber(patientRequest.getContactNumber());
	 * patient.setPreMedicalConditions(patientRequest.getPreMedicalConditions());
	 * patient.setNote(patientRequest.getNote()); return patient; }
	 */

    
    public PatientDetailsResponse mapToPatientDetailResponse(Patient patient) {
        return PatientDetailsResponse.builder()
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
                .sittings(patient.getSittingList())
                .schedules(patient.getSchedulList())
                .build();
    }
    
    
}
