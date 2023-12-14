package com.proba.felo.rest.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
public class ArticleDto {
    private Integer id;
    private String fname;
    private Integer image_id;
    private Set<TagDto> tags;
}