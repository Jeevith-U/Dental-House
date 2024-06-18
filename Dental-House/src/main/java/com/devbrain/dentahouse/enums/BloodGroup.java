package com.devbrain.dentahouse.enums;

public enum BloodGroup {
    A_POSITIVE("A+"),
    A_NEGATIVE("A-"),
    B_POSITIVE("B+"),
    B_NEGATIVE("B-"),
    AB_POSITIVE("AB+"),
    AB_NEGATIVE("AB-"),
    O_POSITIVE("O+"),
    O_NEGATIVE("O-");

    private final String name;

    BloodGroup(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
