import { Component, Input, OnDestroy } from '@angular/core';
import { Book } from '../book';

import { BookService } from '../_shared/book-service.service';

@Component({
    selector: 'books-card',
    templateUrl: './book-card.component.html',
    styleUrls: ['./book-card.component.css'],
    providers: [BookService]
})
export class BookCardComponent implements OnDestroy {
    googleBooksList: any[];
    booksList: Book[];

    constructor(private bookService: BookService) { }

    getGoogleBooksList(search: String): void {
        this.bookService.getGoogleBooksData(search)
            .subscribe(res => {
                console.log(res);
                this.googleBooksList = res;
            },
            err => {
                console.log(err);
            });
    }

    ngOnDestroy(){
        
    }
}