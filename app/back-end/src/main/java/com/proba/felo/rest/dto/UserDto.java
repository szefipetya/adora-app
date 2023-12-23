package com.proba.felo.rest.dto;

import java.util.Set;

public record UserDto(Long id,
                      String username,
                      String name,
                      String email,
                      String role,
                      Set<TagDto> tags) {
}