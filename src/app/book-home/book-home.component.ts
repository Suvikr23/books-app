import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'books-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.css']
})

export class BookHomeComponent {
  title = 'Bookers Cafe';

  constructor(private router: Router) { }

  openBookPage(): void {
    this.router.navigate(['/home/book-page']);
  }
}