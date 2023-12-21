package com.proba.felo.service;

import com.proba.felo.model.entity.Deadline;
import org.springframework.stereotype.Service;

import java.security.Timestamp;
import java.util.List;

@Service
public interface DeadlineService {
    List<Deadline> getDeadlines();
    Deadline getDeadlinesUntilDate(Timestamp until);
    Deadline getNextDeadline();
    void addDeadline(Deadline deadline);
    void deleteDeadline(Deadline deadline);
}
