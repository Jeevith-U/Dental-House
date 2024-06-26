package com.devbrain.dentahouse.mapper;

import org.springframework.stereotype.Component;

import com.devbrain.dentahouse.entity.Sitting;
import com.devbrain.dentahouse.requestdto.SittingRequest;
import com.devbrain.dentahouse.responsedto.SittingResponse;

import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class SittingMapper {
	
	public Sitting mapToSitting(SittingRequest sittingRequest, Sitting sitting) {
		sitting.setSittingTime(sittingRequest.getSittingTime());
		sitting.setSittingDate(sittingRequest.getSittingDate());
		sitting.setPatient(sittingRequest.getPatient());
		return sitting ;
	}
	
	public SittingResponse mapToSittingResponse(Sitting sitting) {
		return SittingResponse.builder()
				.sittingId(sitting.getSittingId())
				.sittingTime(sitting.getSittingTime())
				.sittingDate(sitting.getSittingDate())
				.patient(sitting.getPatient())
				.build() ;
	}
}
