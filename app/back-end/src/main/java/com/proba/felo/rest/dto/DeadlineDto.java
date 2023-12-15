package com.proba.felo.rest.dto;

import java.sql.Timestamp;
import java.util.UUID;

public record DeadlineDto(UUID id, String name, Timestamp date, String information) {

}
