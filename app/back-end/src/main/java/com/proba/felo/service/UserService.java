package com.proba.felo.service;


import com.proba.felo.model.entity.Article;
import com.proba.felo.model.entity.User;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface UserService {

    List<User> getUsers();

    Optional<User> getUserByUsername(String username);

    boolean hasUserWithUsername(String username);

    boolean hasUserWithEmail(String email);

    User validateAndGetUserByUsername(String username);

    User saveUser(User user);

    void deleteUser(User user);

    Optional<User> validUsernameAndPassword(String username, String password);

    Set<Article> getRelevantArticles(User user);

    Set<Article> getRelevantArticlesWithinAWeek(User user);
}
