package com.devbrain.dentahouse.controller;

import com.devbrain.dentahouse.requestdto.PatientRequest;
import com.devbrain.dentahouse.responsedto.PatientDetailsResponse;
import com.devbrain.dentahouse.responsedto.PatientResponse;
import com.devbrain.dentahouse.service.PatientService;
import com.devbrain.dentahouse.util.PageResponseStructure;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
    
    @GetMapping("/patients/details/{patientId}")
    public ResponseEntity<PatientDetailsResponse> getPatientDetailsById(@PathVariable String patientId){
        return patientService.getPatientDetails(patientId);
    }
    
    @GetMapping("/patients/details/contactNumber/{patientId}")
    public ResponseEntity<PatientDetailsResponse> getPatientDetailsByContactNumber(@PathVariable Long contactNumber){
        return patientService.getPatientDetailsByContactNumber(contactNumber);
    }

    @PutMapping("/patients/{patientId}")
    public ResponseEntity<PatientResponse> updatePatient(@RequestBody PatientRequest patientRequest, @PathVariable String patientId){
        return patientService.updatePatient(patientRequest, patientId);
    }

    @GetMapping("/patients")
    public ResponseEntity<PageResponseStructure<List<PatientResponse>>> getAllPatients(@RequestParam int page, @RequestParam int size){
        return patientService.getAllPatients(page, size);
    }
}
