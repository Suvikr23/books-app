import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

//importing services
import { PageHelperService } from '../_shared/page-helper.service'

@Component({
  selector: 'books-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.css'],
  providers: [PageHelperService]
})

export class BookHomeComponent {
  title = 'Bookers Cafe';

  constructor(private router: Router,
    private helperService: PageHelperService) { }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    var elem = document.getElementById('animTest');
    if (this.helperService.isScrolledIntoViewArea(elem)) {
      console.log('Element visible---' + elem.nodeName);
      elem.className = 'dynamic-shake';
    }
  }

  openBookPage(): void {
    this.router.navigate(['/home/book-page']);
  }
}