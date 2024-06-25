package com.devbrain.dentahouse.service;

import com.devbrain.dentahouse.mapper.PatientMapper;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.devbrain.dentahouse.entity.Schedule;
import com.devbrain.dentahouse.exceptions.PatientNotFoundByIdException;
import com.devbrain.dentahouse.exceptions.ScheduleNotFoundByIdException;
import com.devbrain.dentahouse.mapper.ScheduleMapper;
import com.devbrain.dentahouse.repository.PatientRepository;
import com.devbrain.dentahouse.repository.ScheduleRepository;
import com.devbrain.dentahouse.requestdto.ScheduleRequest;
import com.devbrain.dentahouse.responsedto.PatientResponse;
import com.devbrain.dentahouse.responsedto.ScheduleResponse;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class ScheduleService {
	
	private final ScheduleRepository scheduleRepository ;
	private final ScheduleMapper scheduleMapper ;
	private final PatientRepository patientRepository ;
	
	
	public ResponseEntity<ScheduleResponse> addSchedule(String patientId, ScheduleRequest scheduleRequest) {
	  
		final Schedule schedule = scheduleMapper.mapToSchedule(scheduleRequest, new Schedule());

	    patientRepository.findById(patientId).ifPresent(patient -> {
	        patient.getSchedulList().add(schedule);
	        patientRepository.save(patient);
	        schedule.setPatient(patient) ;
	    });

	    scheduleRepository.save(schedule);

	    return ResponseEntity.status(HttpStatus.CREATED).body(scheduleMapper.mapToScheduleResponse(schedule));
	}

	
	public ResponseEntity<ScheduleResponse> getScheduleById(String scheduleId) {
		
		return scheduleRepository.findById(scheduleId)
				.map(schedule -> ResponseEntity
						.status(HttpStatus.FOUND)
						.body(scheduleMapper.mapToScheduleResponse(schedule)))
				.orElseThrow(() -> new ScheduleNotFoundByIdException("Unable to find Schedule")) ;
	}

	
	public ResponseEntity<ScheduleResponse> updateSchedule(ScheduleRequest scheduleRequest,String scheduleId){
		
		return scheduleRepository.findById(scheduleId)
				.map(schedule -> {
					
					Schedule schedules = scheduleMapper.mapToSchedule(scheduleRequest, schedule) ;
					scheduleRepository.save(schedules) ;
					
					return ResponseEntity.ok(scheduleMapper.mapToScheduleResponse(schedules)) ;
					
				})
				.orElseThrow(() -> new ScheduleNotFoundByIdException("Unable to update schedule.")) ;
		
	}
	
	public ResponseEntity<List<ScheduleResponse>> getAllSchedules(){
		
		return null ;
	}
}