package com.devbrain.dentahouse.responsedto;

import java.sql.Time;

import java.util.Date;

import com.devbrain.dentahouse.entity.Patient;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SittingResponse {
	
	private String sittingId ;
	private Date sittingDate ;
	private Time sittingTime ;
	
	private Patient patient ;
}
