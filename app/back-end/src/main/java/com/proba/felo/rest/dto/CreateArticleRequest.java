package com.proba.felo.rest.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class CreateArticleRequest {

    @Schema(example = "Spring Security 3.1")
    @NotBlank
    private String fname;

    @Schema(example = "Spring Security 3.1")
    @NotBlank
    private String image_id;
}
