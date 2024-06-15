package com.devbrain.dentahouse.requestdto;

import com.devbrain.dentahouse.config.GenerateCustomId;
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
public class PatientRequest {

    // Basic Info
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
}
