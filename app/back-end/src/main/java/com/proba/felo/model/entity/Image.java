package com.proba.felo.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
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
@Table(name = "images")
public class Image {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(nullable = false)
    private String fname;

    @JsonManagedReference
    @JsonIgnore
    @OneToMany(mappedBy = "image")
    private Set<Article> imageArticles;

    @Override
    public String toString() {
        return this.getId().toString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Image image = (Image) o;
        return id.equals(image.id) && Objects.equals(fname, image.fname);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, fname);
    }

}
