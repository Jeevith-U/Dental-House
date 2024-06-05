package com.devbrain.dentahouse.config;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import java.time.Year;
import java.util.UUID;

public class EntityIdGenerator implements IdentifierGenerator {

    @Override
    public Object generate(SharedSessionContractImplementor session, Object object) {
        // Generating a random string
        String randomString = UUID.randomUUID().toString();

        // Generating the final ID
        String prefix = "devb";
        String year = String.valueOf(Year.now().getValue());
        return prefix + year + randomString;
    }
}
