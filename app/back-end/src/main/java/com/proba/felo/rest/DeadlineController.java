package com.proba.felo.rest;

import com.proba.felo.model.mapper.DeadlineMapper;
import com.proba.felo.service.DeadlineService;

public class DeadlineController {
    private final DeadlineService deadlineService;
    private final DeadlineMapper deadlineMapper;

    public DeadlineController(DeadlineService deadlineService, DeadlineMapper deadlineMapper) {
        this.deadlineService = deadlineService;
        this.deadlineMapper = deadlineMapper;
    }
}
