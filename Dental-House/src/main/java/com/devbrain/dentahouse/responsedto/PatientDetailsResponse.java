package com.devbrain.dentahouse.responsedto;

import com.devbrain.dentahouse.config.GenerateCustomId;
import com.devbrain.dentahouse.entity.Schedule;
import com.devbrain.dentahouse.entity.Sitting;
import com.devbrain.dentahouse.enums.BloodGroup;
import com.devbrain.dentahouse.enums.Gender;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PatientDetailsResponse {

    // Basic Info
    private String patientId;
    private String firstName;
    private String lastName;
    private LocalDate dateOfBirth;
    private Gender gender;
    private BloodGroup bloodGroup;

    // contact Info
    private Long contactNumber;

    // Other Info
    private List<String> preMedicalConditions;
    private String note;
    private LocalDate registeredDate;
    private LocalDate lastSittingDate;
    
    private List<Schedule> schedules ;
    private List<Sitting> sittings ;
}
