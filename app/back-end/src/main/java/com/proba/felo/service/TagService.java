package com.proba.felo.service;

import com.proba.felo.model.entity.Tag;

import java.util.List;

public interface TagService {

    List<Tag> getTags();

    Tag getTagById(Integer id);

    Tag saveTag(Tag tag);
}
