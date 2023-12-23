package com.proba.felo.model.mapper;


import com.proba.felo.model.entity.Tag;
import com.proba.felo.rest.dto.TagDto;

public interface TagMapper {


    TagDto toTagDto(Tag tag);
}