import { Component,OnInit } from '@angular/core';
import { Book } from '../book'; 

import { BookService } from '../shared/books.service';

@Component({
    selector : 'books-card',
    templateUrl : './bookCard.template.html',
    styleUrls: ['./bookCard.component.css'],
    providers: [BookService]
})
export class booksCardClass implements OnInit{
    booksList : Book[];

    constructor(private bookService : BookService) {}

    getBooksList(): void {
        this.bookService.getBooks().then(Books => this.booksList = Books);
        this.bookService.getGoogleBooksData()
                                .subscribe(res => {
                                    console.log(res)
                                },
                                err => {
                                    console.log(err);
                                });
    }

    ngOnInit() : void {
        this.getBooksList();
    }
 }