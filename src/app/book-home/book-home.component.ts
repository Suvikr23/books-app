import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'books-home',
  templateUrl: './book-home.component.html'
})

export class BookHomeComponent {
  title = 'Books App';

  constructor(private router: Router) { }

  openBookPage(): void {
    this.router.navigate(['/home/book-page']);
  }
}