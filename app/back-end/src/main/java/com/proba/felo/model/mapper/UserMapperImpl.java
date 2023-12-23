package com.proba.felo.model.mapper;


import com.proba.felo.model.entity.User;
import com.proba.felo.rest.dto.TagDto;
import com.proba.felo.rest.dto.UserDto;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDto toUserDto(User user) {
        if (user == null) {
            return null;
        }
        return new UserDto(user.getId(), user.getUsername(), user.getName(), user.getEmail(), user.getRole(), user.getInterestedTags().stream().map((tag) -> new TagDto(tag.getId(), tag.getCaption())).collect(Collectors.toSet()));
    }
}
