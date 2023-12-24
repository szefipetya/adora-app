package com.proba.felo.rest;

import com.proba.felo.model.mapper.DeadlineMapper;
import com.proba.felo.rest.dto.DeadlineDto;
import com.proba.felo.service.DeadlineService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

import static com.proba.felo.config.SwaggerConfig.BASIC_AUTH_SECURITY_SCHEME;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/deadlines")
public class DeadlineController {
    private final DeadlineService deadlineService;
    private final DeadlineMapper deadlineMapper;

    @Operation(security = {@SecurityRequirement(name = BASIC_AUTH_SECURITY_SCHEME)})
    @GetMapping
    public List<DeadlineDto> getDeadlines(@RequestParam(value = "text", required = false) String text) {
        return deadlineService.getDeadlines().stream()
                .map(deadlineMapper::toDeadlineDto)
                .collect(Collectors.toList());

    }

}
