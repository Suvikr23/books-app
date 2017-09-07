import { Component } from '@angular/core';
import { Book } from '../book'; 

const Books : Book[] = [
    { 
        name: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        publication: "Baker Street Publication",
        publishedYear: 2010,
        price: 1200,
        stars: 4.5,
        imageUrl:"https://covers.openlibrary.org/b/id/7885533-L.jpg"
    },
    { 
        name: "Harry Potter",
        author: "J.K. Rowling",
        publication: "Hogwarts Publication",
        publishedYear: 2009,
        price: 1600,
        stars: 5,
        imageUrl:"http://bookriotcom.c.presscdn.com/wp-content/uploads/2014/08/HP_hc_new_2-e1407533769415.jpeg"
    },
    { 
        name: "Game of Thrones",
        author: "G.R.R Martin",
        publication: "Dracarys Publication",
        publishedYear: 2007,
        price: 2000,
        stars: 4.9,
        imageUrl:"https://cdn.waterstones.com/bookjackets/large/9780/0074/9780007448036.jpg"
    },
]
@Component({
    selector : 'books-card',
    templateUrl : './bookCard.template.html',
    styleUrls: ['./bookCard.component.css']
})
export class booksCardClass {
    booksList = Books;

 }