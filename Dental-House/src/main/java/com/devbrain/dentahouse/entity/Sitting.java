package com.devbrain.dentahouse.entity;

import java.sql.Time;
import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import com.devbrain.dentahouse.config.GenerateCustomId;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@EntityListeners(AuditingEntityListener.class)
@Table(name = "sittings")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Sitting {
	
	
	//GenralInfo
	@Id
	@GenerateCustomId
	private String sittingId ;
	
	@CreatedDate
	private Date sittingDate ;
	private Time sittingTime ;
	
	
	//PatientInfo
	@ManyToOne
	@JoinColumn
	private Patient patient ;
}
