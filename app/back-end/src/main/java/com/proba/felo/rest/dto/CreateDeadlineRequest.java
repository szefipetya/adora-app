package com.proba.felo.rest.dto;

import io.swagger.v3.oas.annotations.media.Schema;

import javax.validation.constraints.NotBlank;


public record CreateDeadlineRequest() {
    @Schema(example = "Általános forgalmi adó")
    @NotBlank
    private static String name;

    @Schema(example = "18 százalékos áfa-kulcs alá kerültek a desszert jellegű sajtkészítmények, köztük a túrórudi is")
    @NotBlank
    private static String information;
}
