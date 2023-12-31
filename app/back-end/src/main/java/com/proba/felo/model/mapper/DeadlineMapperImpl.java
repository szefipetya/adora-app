package com.proba.felo.model.mapper;

import com.proba.felo.model.entity.Deadline;
import com.proba.felo.rest.dto.CreateDeadlineRequest;
import com.proba.felo.rest.dto.DeadlineDto;
import org.springframework.stereotype.Service;

@Service
public class DeadlineMapperImpl implements DeadlineMapper {
    @Override
    public Deadline toDeadline(CreateDeadlineRequest createDeadlineRequest) {
        return null;
    }

    @Override
    public DeadlineDto toDeadlineDto(Deadline deadline) {
        if (deadline == null) {
            return null;
        }
        return new DeadlineDto(deadline.getId(), deadline.getName(), deadline.getDate(), deadline.getInformation());
    }
}
