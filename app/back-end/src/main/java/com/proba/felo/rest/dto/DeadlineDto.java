package com.proba.felo.rest.dto;

import java.sql.Timestamp;

public record DeadlineDto(Integer id, String name, Timestamp date, String information) {

}
