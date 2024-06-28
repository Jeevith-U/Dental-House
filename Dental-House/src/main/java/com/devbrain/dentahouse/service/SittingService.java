package com.devbrain.dentahouse.service;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.devbrain.dentahouse.entity.Sitting;
import com.devbrain.dentahouse.exceptions.PatientNotFoundByIdException;
import com.devbrain.dentahouse.exceptions.ScheduleNotFoundByIdException;
import com.devbrain.dentahouse.exceptions.SittingNotFoundByIdException;
import com.devbrain.dentahouse.mapper.ScheduleMapper;
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
	
	public ResponseEntity<SittingResponse> getSitting( String sittingId){
		
			return sittingRepository.findById(sittingId).map(schedule ->
			ResponseEntity.status(HttpStatus.OK)
			.body(sittingMapper.mapToSittingResponse(schedule))) 
					.orElseThrow(() -> new ScheduleNotFoundByIdException("Unable to find the Schedule")) ;
		
	}
	
	public ResponseEntity<SittingResponse> updateSittingResponse(SittingRequest sittingRequest, String sittingId) {
	    
		return sittingRepository.findById(sittingId)
				.map(sitting -> {
		
				Sitting sittings = sittingMapper.mapToSitting(sittingRequest, sitting ) ;
				
				sittingRepository.save(sittings) ;
				
				return ResponseEntity.ok(sittingMapper.mapToSittingResponse(sittings)) ;
				}).orElseThrow(() -> new ScheduleNotFoundByIdException("Unable to update schedule")) ;
				
	}

	
}
