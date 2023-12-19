package com.proba.felo.model.mapper;


import com.proba.felo.model.entity.Article;
import com.proba.felo.rest.dto.ArticleDto;

public interface ArticleMapper {

    // Article toArticle(CreateArticleRequest createArticleRequest);

    ArticleDto toArticleDto(Article book);
}