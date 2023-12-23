package com.proba.felo.runner;


import com.proba.felo.model.entity.Tag;
import com.proba.felo.model.entity.User;
import com.proba.felo.security.WebSecurityConfig;
import com.proba.felo.service.ArticleService;
import com.proba.felo.service.TagService;
import com.proba.felo.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Component
public class DatabaseInitializer implements CommandLineRunner {

        private static final List<User> USERS = Arrays.asList(
                        new User("admin", "admin", "Admin", "teszt1a@mail.com", WebSecurityConfig.ADMIN),
                        new User("user", "user", "User", "teszt2@mail.com", WebSecurityConfig.USER));
        
        private final UserService userService;
        private final TagService tagService;
        private final ArticleService articleService;

        @Override
        public void run(String... args) {
                if (!userService.getUsers().isEmpty()) {
                        return;
                }
                List<Tag> tags = tagService.getTags();
                USERS.get(0).setInterestedTags(
                                new HashSet<>(Arrays.asList(tagService.getTagById(1), tagService.getTagById(2))));
                USERS.get(1).setInterestedTags(
                                new HashSet<>(Arrays.asList(tagService.getTagById(3), tagService.getTagById(4),
                                                tagService.getTagById(2))));
                USERS.forEach(userService::saveUser);
                // getArticles().forEach(articleService::saveArticle);
                Optional<User> u = userService.getUserByUsername("admin");
                log.info("Database initialized");


        //for testing
        //Set<Article> u1articles = userService.getRelevantArticles(u.get());
        //Set<Article> u2articles = userService.getRelevantArticles(userService.getUserByUsername("user").get());
        //u2articles.isEmpty();
    }

    /*private List<Article> getArticles() {
        return Arrays.stream(ARTICLES_STR.split("\n"))
                .map(articleInfoStr -> articleInfoStr.split(";"))
                .map(articleInfoArr -> new Article(1,"test", "test.txt", new Date(), null, null))
                .collect(Collectors.toList());
    }*/
}
