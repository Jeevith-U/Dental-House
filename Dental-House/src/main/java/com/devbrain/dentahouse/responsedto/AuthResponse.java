package com.devbrain.dentahouse.responsedto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthResponse {
    private String doctorId;
    private String name;
    private boolean isAuthenticated;
    private long accessExpiration;
    private long refreshExpiration;
}
