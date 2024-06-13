package com.devbrain.dentahouse.service;

import com.devbrain.dentahouse.entity.Doctor;
import com.devbrain.dentahouse.exceptions.UserNotLoggedInException;
import com.devbrain.dentahouse.repository.DoctorRepository;
import com.devbrain.dentahouse.requestdto.AuthRequest;
import com.devbrain.dentahouse.responsedto.AuthResponse;
import com.devbrain.dentahouse.security.JwtService;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.security.SignatureException;
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

import java.util.Date;

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

        if (auth.isAuthenticated())
            return doctorRepository.findByEmail(authRequest.getEmail())
                    .map(doctor -> {
                        HttpHeaders headers = new HttpHeaders();
                        generateAccessToken(doctor.getEmail(), headers);
                        generateRefreshToken(doctor.getEmail(), headers);
                        return ResponseEntity
                                .ok()
                                .headers(headers)
                                .body(AuthResponse.builder()
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
        //generating refresh token
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

    private static final String FAILED_REFRESH = "Failed to refresh the ";

    public ResponseEntity<AuthResponse> refreshLogin(String refreshToken, String accessToken) {
        if (refreshToken == null) throw new UserNotLoggedInException(FAILED_REFRESH);

        String username = jwtService.extractUsername(refreshToken);
        Date refreshExpiration = jwtService.extractExpiry(refreshToken);
        Date refreshIssuedAt = jwtService.extractIssuedAt(refreshToken);
        Date accessExpiration = null;

        /* set accessToken to null if the token is invalid,
        ensuring the that there are no unnecessary exception thrown to the user
         */
        try {
            accessExpiration = accessToken != null ? jwtService.extractExpiry(accessToken) : null;
        } catch (ExpiredJwtException | UnsupportedJwtException | MalformedJwtException | SignatureException ex) {
            accessToken = null;
        }

        // getting the leftover expiration duration for refresh token and access token
        long evaluatedAccessExpiration = accessExpiration != null
                ? accessExpirySeconds - ((new Date().getTime() - accessExpiration.getTime()) / 1000)
                : accessExpirySeconds;
        boolean newRefreshRequired = refreshIssuedAt.before(new Date()) && (refreshIssuedAt.getTime() - new Date().getTime()) > 24 * 60 * 60 * 1000;
        long evaluatedRefreshExpiration = newRefreshRequired
                ? refreshExpirySeconds
                : refreshExpirySeconds - ((new Date().getTime() - refreshExpiration.getTime()) / 1000);

        Doctor doctor = doctorRepository.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException(FAILED_REFRESH));

        HttpHeaders headers = new HttpHeaders();
        // validating if the accessToken is not already present
        if (accessToken == null) this.generateAccessToken(doctor.getEmail(), headers);
        // generating new refresh token if the refresh token was issued before 24 hours.
        if (newRefreshRequired) this.generateRefreshToken(doctor.getEmail(), headers);

        return ResponseEntity.ok().headers(headers).body(AuthResponse.builder()
                .doctorId(doctor.getDoctorId())
                .name(doctor.getName())
                .isAuthenticated(true)
                .accessExpiration(evaluatedAccessExpiration)
                .refreshExpiration(evaluatedRefreshExpiration)
                .build());
    }
}
