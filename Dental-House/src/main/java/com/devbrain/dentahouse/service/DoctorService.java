package com.devbrain.dentahouse.service;

import com.devbrain.dentahouse.repository.DoctorRepository;
import com.devbrain.dentahouse.requestdto.AuthRequest;
import com.devbrain.dentahouse.responsedto.AuthResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DoctorService {

    private AuthenticationManager authenticationManager;
    private DoctorRepository doctorRepository;
    public ResponseEntity<AuthResponse> login(AuthRequest authRequest) {
        Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

        if(auth.isAuthenticated()) return doctorRepository.findByEmail(authRequest.getEmail())
                .map(doctor -> {

                })
    }
}
