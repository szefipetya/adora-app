package com.proba.felo.repository;


import com.proba.felo.model.entity.Article;
import com.proba.felo.model.entity.Tag;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticleRepository extends JpaRepository<Article, String> {

    List<Article> findAllByOrderById();

    List<Article> findAllByTagRelTags(Tag tag);

    @Query(value="SELECT * FROM articles INNER JOIN tag_rel ON articles.id = tag_rel.article_id WHERE tag_rel.tag_id = :selected_tag AND articles.date_of_upload >= CURRENT_DATE - 7", nativeQuery = true) //TODO
    List<Article> findAllByTagWithinAWeek(@Param("selected_tag")Integer selected_tag);

}
