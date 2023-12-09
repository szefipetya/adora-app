package com.proba.felo.service;


import com.proba.felo.model.entity.Article;

import java.util.List;

public interface ArticleService {

    List<Article> getArticles();

    List<Article> getArticlesContainingText(String text);

    Article validateAndGetArticle(String isbn);

    Article saveArticle(Article book);

    void deleteArticle(Article book);
}
