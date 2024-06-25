package com.devbrain.dentahouse.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.devbrain.dentahouse.entity.Sitting;
import com.devbrain.dentahouse.exceptions.PatientNotFoundByIdException;
import com.devbrain.dentahouse.exceptions.SittingNotFoundByIdException;
import com.devbrain.dentahouse.mapper.SittingMapper;
import com.devbrain.dentahouse.repository.PatientRepository;
import com.devbrain.dentahouse.repository.SittingRepository;
import com.devbrain.dentahouse.requestdto.SittingRequest;
import com.devbrain.dentahouse.responsedto.SittingResponse;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class SittingService {
	
	private final SittingRepository sittingRepository ;
	private final SittingMapper sittingMapper ;
	private final PatientRepository patientRepository ;
	
	
	public ResponseEntity<SittingResponse> addSitting(SittingRequest sittingRequest, String patientId){
		
		final Sitting sitting = sittingMapper.mapToSitting(sittingRequest, new Sitting()) ;
		
		patientRepository.findById(patientId).ifPresent(patient -> {
					patient.getSittingList().add(sitting) ;
					sitting.setPatient(patient) ;
					sittingRepository.save(sitting) ;
					patientRepository.save(patient) ;
				});
		
		return ResponseEntity.status(HttpStatus.CREATED).body(sittingMapper.mapToSittingResponse(sitting)) ;
	}
	
	public ResponseEntity<SittingResponse> getSitting( String patientId, String sittingId){
		
		return patientRepository.findById(patientId)
				.map(patient -> patient.getSittingList().stream()
				.filter(sitting -> sitting.getSittingId().equals(sittingId))
				.findFirst()
				.map(schedule -> ResponseEntity.ok(sittingMapper.mapToSittingResponse(schedule)))
				.orElseThrow(() -> new SittingNotFoundByIdException("Unable find the sitting")))
				
				.orElseThrow(() -> new PatientNotFoundByIdException("Unable To find Patient")) ;
				
		
	}
	
	public ResponseEntity<SittingResponse> updateSittingResponse(SittingRequest sittingRequest, String patientId, String sittingId) {
	    return patientRepository.findById(patientId)
	            .map(patient -> {
	                Sitting sitting = patient.getSittingList().stream()
	                        .filter(s -> s.getSittingId().equals(sittingId))
	                        .findFirst()
	                        .orElseThrow(() -> new SittingNotFoundByIdException("Unable to find the sitting"));

	                sitting.setSittingDate(sittingRequest.getSittingDate());
	                sitting.setSittingTime(sittingRequest.getSittingTime());

	                sittingRepository.save(sitting);
	                patientRepository.save(patient);

	                return ResponseEntity.ok(sittingMapper.mapToSittingResponse(sitting));
	            })
	            .orElseThrow(() -> new PatientNotFoundByIdException("Unable to find Patient"));
	}

	
}
