package com.proba.felo.service;


import com.proba.felo.model.entity.Book;

import java.util.List;

public interface BookService {

    List<Book> getBooks();

    List<Book> getBooksContainingText(String text);

    Book validateAndGetBook(String isbn);

    Book saveBook(Book book);

    void deleteBook(Book book);
}
