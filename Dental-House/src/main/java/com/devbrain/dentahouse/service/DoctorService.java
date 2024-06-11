package com.devbrain.dentahouse.service;

import com.devbrain.dentahouse.repository.DoctorRepository;
import com.devbrain.dentahouse.requestdto.AuthRequest;
import com.devbrain.dentahouse.responsedto.AuthResponse;
import com.devbrain.dentahouse.security.JwtService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class DoctorService {

    private final AuthenticationManager authenticationManager;
    private final DoctorRepository doctorRepository;

    private final JwtService jwtService;

    @Value("${app.jwt.token_expiry.access_seconds}")
    private long accessExpirySeconds;

    @Value("${app.jwt.token_expiry.refresh_seconds}")
    private long refreshExpirySeconds;

    public DoctorService(AuthenticationManager authenticationManager, DoctorRepository doctorRepository, JwtService jwtService) {
        this.authenticationManager = authenticationManager;
        this.doctorRepository = doctorRepository;
        this.jwtService = jwtService;
    }

    public ResponseEntity<AuthResponse> login(AuthRequest authRequest) {
        Authentication auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));

        if (auth.isAuthenticated()) return doctorRepository.findByEmail(authRequest.getEmail())
                .map(doctor -> {
                    HttpHeaders headers = new HttpHeaders();
                    generateAccessToken(doctor.getEmail(), headers);
                    generateRefreshToken(doctor.getEmail(), headers);
                    return ResponseEntity.ok(AuthResponse.builder()
                            .doctorId(doctor.getDoctorId())
                            .name(doctor.getName())
                            .isAuthenticated(true)
                            .accessExpiration(accessExpirySeconds)
                            .refreshExpiration(refreshExpirySeconds)
                            .build());
                }).orElseThrow(() -> new UsernameNotFoundException("Failed to login"));
        else throw new BadCredentialsException("The given credentials are incorrect");
    }

    private void generateAccessToken(String subject, HttpHeaders headers) {
        //generating access token
        String newAccessToken = jwtService.generateAccessToken(subject);

        // adding cookies to the HttpHeaders
        headers.add(HttpHeaders.SET_COOKIE, setCookie("at", newAccessToken, accessExpirySeconds));
    }

    private void generateRefreshToken(String subject, HttpHeaders headers) {
        //generating access token
        String newRefreshToken = jwtService.generateRefreshToken(subject);

        // adding cookies to the HttpHeaders
        headers.add(HttpHeaders.SET_COOKIE, setCookie("rt", newRefreshToken, refreshExpirySeconds));
    }

    private String setCookie(String name, String value, long maxAge) {
        ResponseCookie cookie = ResponseCookie.from(name, value)
                .domain("localhost")
                .path("/")
                .httpOnly(true)
                .sameSite("Lax")
                .secure(false)
                .maxAge(maxAge)
                .build();
        return cookie.toString();
    }
}
