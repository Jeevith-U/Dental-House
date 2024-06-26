package com.devbrain.dentahouse.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devbrain.dentahouse.requestdto.ScheduleRequest;
import com.devbrain.dentahouse.requestdto.SittingRequest;
import com.devbrain.dentahouse.responsedto.ScheduleResponse;
import com.devbrain.dentahouse.responsedto.SittingResponse;
import com.devbrain.dentahouse.service.ScheduleService;
import com.devbrain.dentahouse.service.SittingService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("${app.base_url}")
@AllArgsConstructor
public class SittingController {
	
	private SittingService sittingService ;
	
	@PostMapping("/sitting/{patientId}")
	public ResponseEntity<SittingResponse> addSchedule(SittingRequest sittingRequest, @PathVariable String patientId ){
		return sittingService.addSitting(sittingRequest, patientId);
	}
	
	@GetMapping("/sitting/{sittingId}")
	public ResponseEntity<SittingResponse> getSchedule( @PathVariable String sittingId){
		return sittingService.getSitting( sittingId) ;
	}
	
	@PutMapping("/sitting/{sittingId}")
	public ResponseEntity<SittingResponse> updateSchedule( @PathVariable String sittingId, SittingRequest sittingRequest){
		return sittingService.updateSittingResponse(sittingRequest, sittingId) ;
	}

}
