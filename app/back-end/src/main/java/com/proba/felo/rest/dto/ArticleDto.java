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
    private String title;
    private String lead;
    private String image;
    private Set<TagDto> tags;
}