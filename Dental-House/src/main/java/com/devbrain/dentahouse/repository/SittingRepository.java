package com.devbrain.dentahouse.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devbrain.dentahouse.entity.Schedule;
import com.devbrain.dentahouse.entity.Sitting;

public interface SittingRepository extends JpaRepository<Sitting, String> {

}
