package com.devbrain.dentahouse.config;

import com.devbrain.dentahouse.entity.Doctor;
import com.devbrain.dentahouse.repository.DoctorRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Slf4j
@Component
@AllArgsConstructor
public class DoctorSetup {

    private DoctorRepository doctorRepository;
    private PasswordEncoder passwordEncoder;

    @EventListener(ApplicationReadyEvent.class)
    public void checkAndInsertDoctor() {
        List<Doctor> doctors = doctorRepository.findAll();
        if (doctors.isEmpty()) {
            log.info("Generating new Doctor..");

            String password = UUID.randomUUID().toString();

            doctorRepository.save(Doctor.builder()
                    .name("Varsha Gupta")
                    .phoneNumber(8765678998L)
                    .email("doctor@example.com")
                    .password((passwordEncoder.encode(password)))
                    .build());
            log.info("The Generated password is: "+ password);
            log.info("Doctor saved to the database.");

        } else log.info("Doctor exists by name: "+ doctors.get(0).getName());
    }
}
