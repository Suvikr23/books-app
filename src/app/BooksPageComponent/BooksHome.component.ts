import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector : 'books-home',
    templateUrl: './BooksHome.component.html'
})

export class BooksHomeComponent {
    title = 'Books App';

    constructor(private router: Router) { }
    
      openBookCards() : void {
        this.router.navigate(['/books-home/books-page']);
      }
}