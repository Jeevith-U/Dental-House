package com.devbrain.dentahouse.controller;

import com.devbrain.dentahouse.requestdto.PatientRequest;
import com.devbrain.dentahouse.responsedto.PatientResponse;
import com.devbrain.dentahouse.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("${app.base_url}")
@AllArgsConstructor
public class PatientController {

    private PatientService patientService;

    @PostMapping("/patients")
    public ResponseEntity<PatientResponse> addPatient(@RequestBody PatientRequest patientRequest){
        return patientService.addPatient(patientRequest);
    }

    @GetMapping("/patients/{patientId}")
    public ResponseEntity<PatientResponse> getPatientById(@PathVariable String patientId){
        return patientService.getPatient(patientId);
    }
}
