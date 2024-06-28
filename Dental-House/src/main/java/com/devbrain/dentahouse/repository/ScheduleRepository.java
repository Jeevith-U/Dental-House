package com.devbrain.dentahouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devbrain.dentahouse.entity.Schedule;

public interface ScheduleRepository extends JpaRepository<Schedule, String> {

}
