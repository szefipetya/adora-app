package com.proba.felo.service;


import com.proba.felo.model.entity.Tag;
import com.proba.felo.repository.TagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TagService {

    private final TagRepository tagRepository;

    public List<Tag> getTags() {
        return tagRepository.findAll();
    }

    public Tag getTagById(Integer id) {
        return tagRepository.findOneById(id);
    }

    public Tag saveTag(Tag tag) {
        return tagRepository.save(tag);
    }
}
