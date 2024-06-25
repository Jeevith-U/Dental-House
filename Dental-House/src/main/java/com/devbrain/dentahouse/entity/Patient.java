package com.devbrain.dentahouse.entity;

import com.devbrain.dentahouse.config.GenerateCustomId;
import com.devbrain.dentahouse.enums.BloodGroup;
import com.devbrain.dentahouse.enums.Gender;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "patient")
@EntityListeners(AuditingEntityListener.class)
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
    @Column(length = 2000)
    private List<String> preMedicalConditions;
    @Column(length = 2000)
    private String note;

    // Auditing Info
    @CreatedDate
    private LocalDate registeredDate;
    private LocalDate lastSittingDate;
    
    //ScheduleInfo
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "patient")
    private List<Schedule> schedulList ;
    
    //SittingInfo
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "patient")
    private List<Sitting> sittingList ;
}
