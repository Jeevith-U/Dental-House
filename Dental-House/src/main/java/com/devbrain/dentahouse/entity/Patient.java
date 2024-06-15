package com.devbrain.dentahouse.entity;

import com.devbrain.dentahouse.config.GenerateCustomId;
import com.devbrain.dentahouse.enums.BloodGroup;
import com.devbrain.dentahouse.enums.Gender;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "patient")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Patient {

    // Basic Info
    @Id
    @GenerateCustomId
    private String patientId;
    private String firstName;
    private String lastName;
    private LocalDate dateOfBirth;
    @Enumerated(EnumType.STRING)
    private Gender gender;
    @Enumerated(EnumType.STRING)
    private BloodGroup bloodGroup;

    // contact Info
    private Long contactNumber;

    // Other Info
    @ElementCollection
    @CollectionTable(name = "pre_medical_condition", joinColumns = @JoinColumn(name = "patient_id"))
    @Column(name = "medial_condition")
    private List<String> preMedicalConditions;

    @Column(length = 2000)
    private String note;

    private LocalDate registeredDate;
    private LocalDate lastSittingDate;
}
