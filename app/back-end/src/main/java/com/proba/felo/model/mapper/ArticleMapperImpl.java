package com.proba.felo.model.mapper;

import com.proba.felo.model.entity.Article;
import com.proba.felo.rest.dto.ArticleDto;
import com.proba.felo.rest.dto.TagDto;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class ArticleMapperImpl implements ArticleMapper {

  /*  @Override
    public Article toArticle(ArticleDto dto) {
        if (dto == null) {
            return null;
        }
        return new Article(dto.getId(), dto.getFname(), dto.getImage_id());
    }*/

    @Override
    public ArticleDto toArticleDto(Article article) {
        if (article == null) {
            return null;
        }
        return new ArticleDto(article.getId(),
                article.getFname(),
                article.getImage().getId(),
                article.getTagRelTags().stream()
                        .map(tag -> new TagDto(tag.getId(), tag.getCaption()))
                        .collect(Collectors.toSet()));
    }
}
