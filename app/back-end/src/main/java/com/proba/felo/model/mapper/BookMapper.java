package com.proba.felo.model.mapper;


import com.proba.felo.model.entity.Book;
import com.proba.felo.rest.dto.BookDto;
import com.proba.felo.rest.dto.CreateBookRequest;

public interface BookMapper {

    Book toBook(CreateBookRequest createBookRequest);

    BookDto toBookDto(Book book);
}