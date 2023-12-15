package com.proba.felo.model.entity;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Data
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "_user", uniqueConstraints = {
        @UniqueConstraint(columnNames = "username"),
        @UniqueConstraint(columnNames = "email")
})
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String name;
    private String email;
    private String role;
    @ManyToMany
    @JoinTable(name = "TagRel", joinColumns = @JoinColumn(name = "articleId"), inverseJoinColumns = @JoinColumn(name = "tagId"))
    private Set<Tag> tagRelTags;

    public User(String username, String password, String name, String email, String role, Set<Tag> tags) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.role = role;
        this.tagRelTags = tags;
    }
}