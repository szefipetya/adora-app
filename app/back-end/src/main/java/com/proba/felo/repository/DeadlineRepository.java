package com.proba.felo.repository;

import com.proba.felo.model.entity.Deadline;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeadlineRepository extends JpaRepository<Deadline, String> {

    List<Deadline> findAllByOrderById();
    List<Deadline> findAllByOrderByDate();

    List<Deadline> findAllByOrderByName();
}
