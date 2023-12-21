package com.proba.felo.service;


import com.proba.felo.exception.UserNotFoundException;
import com.proba.felo.model.entity.Article;
import com.proba.felo.model.entity.User;
import com.proba.felo.repository.ArticleRepository;
import com.proba.felo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ArticleRepository articleRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public boolean hasUserWithUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public boolean hasUserWithEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public User validateAndGetUserByUsername(String username) {
        return getUserByUsername(username)
                .orElseThrow(() -> new UserNotFoundException(String.format("User with username %s not found", username)));
    }

    @Override
    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(User user) {
        userRepository.delete(user);
    }

    @Override
    public Optional<User> validUsernameAndPassword(String username, String password) {
        return getUserByUsername(username)
                .filter(user -> passwordEncoder.matches(password, user.getPassword()));
    }

    @Override
    public Set<Article> getRelevantArticles(User user){
        return user.getInterestedTags().stream()
                .map(articleRepository::findAllByTagRelTags)
                .flatMap(List::stream)
                .collect(Collectors.toSet());
    }

    @Override
    public Set<Article> getRelevantArticlesWithinAWeek(User user){
        return user.getInterestedTags().stream()
                .map(tag -> articleRepository.findAllByTagWithinAWeek(tag.getId()))
                .flatMap(List::stream)
                .collect(Collectors.toSet());
    }
}
