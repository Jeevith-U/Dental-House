package com.devbrain.dentahouse.entity;

import com.devbrain.dentahouse.config.EntityIdGenerator;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "doctor")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Doctor {
    @Id
    @GeneratedValue(generator = "entity-id-generator")
    @GenericGenerator(name = "entity-id-generator", type = EntityIdGenerator.class)
    private String doctorId;
    private String name;
    private long phoneNumber;
    private String email;
    private String password;
}
