package com.devbrain.dentahouse.requestdto;

import com.devbrain.dentahouse.enums.SubjectType;
import lombok.Getter;
import lombok.Setter;

import javax.security.auth.Subject;

@Getter
@Setter
public class AuthRequest {
    private String subject;
    private String password;
    private SubjectType subjectType;
}
