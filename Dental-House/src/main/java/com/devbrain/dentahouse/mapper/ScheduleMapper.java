package com.devbrain.dentahouse.mapper;

import org.springframework.stereotype.Component;
import com.devbrain.dentahouse.entity.Schedule;
import com.devbrain.dentahouse.requestdto.ScheduleRequest;
import com.devbrain.dentahouse.responsedto.ScheduleResponse;
import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class ScheduleMapper {
	
	public Schedule mapToSchedule(ScheduleRequest request, Schedule schedule) {
		schedule.setScheduleDate(request.getScheduleDate());
		schedule.setScheduleTime(request.getScheduleTime());
		return schedule ;
	}
	
	public ScheduleResponse mapToScheduleResponse(Schedule schedule) {
		return ScheduleResponse.builder()
				.scheduleId(schedule.getScheduleId())
				.scheduleDate(schedule.getScheduleDate())
				.scheduleTime(schedule.getScheduleTime())
				.build();
	}
}
