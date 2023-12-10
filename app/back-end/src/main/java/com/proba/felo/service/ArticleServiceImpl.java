package com.proba.felo.service;

import com.proba.felo.exception.ArticleNotFoundException;
import com.proba.felo.model.entity.Article;
import com.proba.felo.repository.ArticleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ArticleServiceImpl implements ArticleService {

    private final ArticleRepository articleRepository;

    @Override
    public List<Article> getArticles() {
        return articleRepository.findAllByOrderByTitle();
    }

    @Override
    public List<Article> getArticlesContainingText(String text) {
        return articleRepository.findByIsbnContainingOrTitleContainingIgnoreCaseOrderByTitle(text, text);
    }

    @Override
    public Article validateAndGetArticle(String isbn) {
        return articleRepository.findById(isbn)
                .orElseThrow(() -> new ArticleNotFoundException(String.format("Article with isbn %s not found", isbn)));
    }

    @Override
    public Article saveArticle(Article book) {
        return articleRepository.save(book);
    }

    @Override
    public void deleteArticle(Article book) {
        articleRepository.delete(book);
    }
}
