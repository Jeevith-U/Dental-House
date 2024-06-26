package com.devbrain.dentahouse.responsedto;

import java.time.LocalDate;
import java.time.LocalTime;

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
public class ScheduleResponse {
	
	//Basic info
	private String scheduleId ;
	private LocalDate scheduleDate ;
	private LocalTime scheduleTime ;
//	private Patient patient ;
}
