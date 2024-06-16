package com.devbrain.dentahouse.entity;

import com.devbrain.dentahouse.config.GenerateCustomId;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "doctor")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Doctor {
    @Id
    @GenerateCustomId
    private String doctorId;
    private String name;
    private long phoneNumber;
    private String email;
    private String password;
}
