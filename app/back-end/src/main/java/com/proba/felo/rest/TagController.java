package com.proba.felo.rest;


import com.proba.felo.model.mapper.TagMapper;
import com.proba.felo.rest.dto.TagDto;
import com.proba.felo.service.TagService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import static com.proba.felo.config.SwaggerConfig.BASIC_AUTH_SECURITY_SCHEME;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/tags")
public class TagController {

    private final TagService tagService;
    private final TagMapper tagMapper;

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping
    public List<TagDto> getTags(@RequestParam(value = "text", required = false) String text) {
        return tagService.getTags().stream()
                .map(tagMapper::toTagDto)
                .collect(Collectors.toList());

    }

   /* @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public ArticleDto createArticle(@Valid @RequestBody CreateArticleRequest createArticleRequest) {
        Article article = articleMapper.toArticle(createArticleRequest);
        return articleMapper.toArticleDto(articleService.saveArticle(article));
    }*/


}
