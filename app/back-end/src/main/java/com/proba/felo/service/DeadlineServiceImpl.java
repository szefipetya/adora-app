package com.proba.felo.service;

import com.proba.felo.model.entity.Deadline;
import com.proba.felo.repository.DeadlineRepository;

import java.security.Timestamp;
import java.util.List;

public class DeadlineServiceImpl implements DeadlineService{
    private DeadlineRepository deadlineRepository;
    @Override
    public List<Deadline> getDeadlines() {
        return deadlineRepository.findAllByOrderById();
    }

    @Override
    public Deadline getDeadlinesUntilDate(Timestamp until) {
        return null;
    }

    @Override
    public Deadline getNextDeadline() {
        return null;
    }

    @Override
    public void addDeadline(Deadline deadline) {
        deadlineRepository.save(deadline);
    }

    @Override
    public void deleteDeadline(Deadline deadline) {
        deadlineRepository.delete(deadline);
    }
}
