package com.proba.felo.rest;


import com.proba.felo.model.entity.Article;
import com.proba.felo.model.mapper.ArticleMapper;
import com.proba.felo.rest.dto.ArticleDto;
import com.proba.felo.service.ArticleService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

import static com.proba.felo.config.SwaggerConfig.BASIC_AUTH_SECURITY_SCHEME;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/articles")
public class ArticleController {

    private final ArticleService articleService;
    private final ArticleMapper articleMapper;

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping
    public List<ArticleDto> getArticles(@RequestParam(value = "text", required = false) String text) {
        return articleService.getArticles().stream()
                .map(articleMapper::toArticleDto)
                .collect(Collectors.toList());

    }

   /* @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public ArticleDto createArticle(@Valid @RequestBody CreateArticleRequest createArticleRequest) {
        Article article = articleMapper.toArticle(createArticleRequest);
        return articleMapper.toArticleDto(articleService.saveArticle(article));
    }*/

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @DeleteMapping("/{isbn}")
    public ArticleDto deleteArticle(@PathVariable String isbn) {
        Article article = articleService.validateAndGetArticle(isbn);
        articleService.deleteArticle(article);
        return articleMapper.toArticleDto(article);
    }
}
