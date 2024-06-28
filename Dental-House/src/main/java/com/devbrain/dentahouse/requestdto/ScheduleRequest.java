package com.devbrain.dentahouse.requestdto;

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
public class ScheduleRequest {
	
	//Basic info
	private LocalDate scheduleDate ;
	private LocalTime scheduleTime ;
}
