package com.devbrain.dentahouse.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devbrain.dentahouse.requestdto.ScheduleRequest;
import com.devbrain.dentahouse.responsedto.ScheduleResponse;
import com.devbrain.dentahouse.service.ScheduleService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("${app.base_url}")
@AllArgsConstructor
public class ScheduleController {
	
	private ScheduleService scheduleService ;
	
	@PostMapping("/schedules/{patientId}")
	public ResponseEntity<ScheduleResponse> addSchedule(@PathVariable String patientId, ScheduleRequest scheduleRequest){
		return scheduleService.addSchedule(patientId, scheduleRequest) ;
	}
	
	@GetMapping("/schedules/{scheduleId}")
	public ResponseEntity<ScheduleResponse> getSchedule(@PathVariable String scheduleId ){
		return scheduleService.getScheduleById(scheduleId) ;
	}
	
	@PutMapping("/schedules/{scheduleId}")
	public ResponseEntity<ScheduleResponse> updateSchedule(@PathVariable String scheduleId , ScheduleRequest scheduleRequest){
		return scheduleService.updateSchedule(scheduleRequest, scheduleId) ;
	}

}
