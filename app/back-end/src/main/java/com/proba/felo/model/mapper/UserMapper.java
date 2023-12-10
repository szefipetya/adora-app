package com.proba.felo.model.mapper;


import com.proba.felo.model.entity.User;
import com.proba.felo.rest.dto.UserDto;

public interface UserMapper {

    UserDto toUserDto(User user);
}