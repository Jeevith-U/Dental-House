package com.devbrain.dentahouse.requestdto;

import com.devbrain.dentahouse.enums.SubjectType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AuthRequest {
    private String email;
    private String password;
}
