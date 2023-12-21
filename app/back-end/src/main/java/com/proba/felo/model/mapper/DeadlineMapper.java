package com.proba.felo.model.mapper;

import com.proba.felo.model.entity.Deadline;
import com.proba.felo.rest.dto.CreateDeadlineRequest;
import com.proba.felo.rest.dto.DeadlineDto;

public interface DeadlineMapper {
    Deadline toDeadline(CreateDeadlineRequest createDeadlineRequest);

    DeadlineDto toDeadlineDto(Deadline deadline);
}
