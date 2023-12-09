package com.proba.felo.model.mapper;

import com.proba.felo.model.entity.Article;
import com.proba.felo.rest.dto.ArticleDto;
import com.proba.felo.rest.dto.CreateArticleRequest;
import org.springframework.stereotype.Service;

@Service
public class ArticleMapperImpl implements ArticleMapper {

    @Override
    public Article toArticle(CreateArticleRequest createArticleRequest) {
        if (createArticleRequest == null) {
            return null;
        }
        return new Article(createArticleRequest.getIsbn(), createArticleRequest.getTitle(), createArticleRequest.getContent());
    }

    @Override
    public ArticleDto toArticleDto(Article article) {
        if (article == null) {
            return null;
        }
        return new ArticleDto(article.getIsbn(), article.getTitle());
    }
}
