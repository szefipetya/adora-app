package com.proba.felo.model.mapper;

import com.proba.felo.model.entity.Tag;
import com.proba.felo.rest.dto.TagDto;
import org.springframework.stereotype.Service;

@Service
public class TagMapperImpl implements TagMapper {

    /*
     * @Override
     * public Article toArticle(ArticleDto dto) {
     * if (dto == null) {
     * return null;
     * }
     * return new Article(dto.getId(), dto.getFname(), dto.getImage_id());
     * }
     */

    @Override
    public TagDto toTagDto(Tag tag) {
        if (tag == null) {
            return null;
        }
        return new TagDto(tag.getId(), tag.getCaption());
    }
}
