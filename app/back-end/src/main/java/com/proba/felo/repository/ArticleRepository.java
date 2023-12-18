package com.proba.felo.repository;


import com.proba.felo.model.entity.Article;
import com.proba.felo.model.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, String> {

    List<Article> findAllByOrderById();

    List<Article> findAllByTagRelTags(Tag tag);

}
