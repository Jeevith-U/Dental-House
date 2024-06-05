package com.devbrain.dentahouse.controller;

import com.devbrain.dentahouse.requestdto.AuthRequest;
import com.devbrain.dentahouse.responsedto.AuthResponse;
import com.devbrain.dentahouse.service.DoctorService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("${app.base_url")
@AllArgsConstructor
public class DoctorController {

    private DoctorService doctorService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest authRequest){
        return doctorService.login(authRequest);
    }
}
