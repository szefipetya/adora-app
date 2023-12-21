package com.proba.felo.repository;

import com.proba.felo.model.entity.Deadline;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DeadlineRepository extends JpaRepository<Deadline, String> {

    List<Deadline> findAllByOrderById();
    List<Deadline> findAllByOrderByDate();

    List<Deadline> findAllByOrderByName();

    @Query(value="SELECT * FROM deadlines WHERE date <= CURRENT_DATE + :days AND date >= CURRENT_DATE", nativeQuery = true)
    List<Deadline> findAllByOrderWithinXDays(@Param("days")Integer days);
}
