import { Component, Input } from '@angular/core';
import { Book } from '../book';

import { BookService } from '../shared/books.service';

@Component({
    selector: 'books-card',
    templateUrl: './bookCard.template.html',
    styleUrls: ['./bookCard.component.css'],
    providers: [BookService]
})
export class booksCardClass{
    googleBooksList : any[];
    booksList: Book[];

    constructor(private bookService: BookService) { }

    getGoogleBooksList(search : String): void {
        this.bookService.getGoogleBooksData(search)
            .subscribe(res => {
                console.log(res);
                this.googleBooksList = res;
                console.log("this.googleBooksList------"+this.googleBooksList[0]);
            },
            err => {
                console.log(err);
            });
    }
}