package com.proba.felo.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tags")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String caption;

    @JsonIgnore
    @ManyToMany(mappedBy = "tagRelTags")
        private Set<Article> tagRelArticles;

    @Override
    public String toString() {
        return this.getId().toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Tag tag = (Tag) o;
        return id.equals(tag.id) && Objects.equals(caption, tag.caption);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, caption);
    }
}
