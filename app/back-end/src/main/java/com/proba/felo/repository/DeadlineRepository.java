package com.proba.felo.repository;

import com.proba.felo.model.entity.Article;
import com.proba.felo.model.entity.Deadline;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DeadlineRepository extends JpaRepository<Deadline, String> {

    List<Deadline> findAllByOrderById();
    List<Deadline> findAllByOrderByDate();

    List<Deadline> findAllByOrderByName();
}
