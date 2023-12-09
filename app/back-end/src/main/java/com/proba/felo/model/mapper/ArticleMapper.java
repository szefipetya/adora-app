package com.proba.felo.model.mapper;


import com.proba.felo.model.entity.Article;
import com.proba.felo.rest.dto.ArticleDto;
import com.proba.felo.rest.dto.CreateArticleRequest;

public interface ArticleMapper {

    Article toArticle(CreateArticleRequest createArticleRequest);

    ArticleDto toArticleDto(Article book);
}