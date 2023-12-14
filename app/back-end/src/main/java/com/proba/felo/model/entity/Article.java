package com.proba.felo.model.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@EqualsAndHashCode
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String fname;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "image_id")
    @JsonBackReference
    private Image image;

    @ManyToMany
    @JoinTable(name = "TagRel", joinColumns = @JoinColumn(name = "articleId"), inverseJoinColumns = @JoinColumn(name = "tagId"))
    private Set<Tag> tagRelTags;

    @Override
    public String toString() {
        return this.getId().toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Article article = (Article) o;
        return id.equals(article.id) && Objects.equals(fname, article.fname);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, fname);
    }
}
