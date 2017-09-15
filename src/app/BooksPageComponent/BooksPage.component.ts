import { Component,ViewChild } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { booksCardClass } from '../BookCardComponent/bookCard.component'

@Component({
    selector: 'books-page',
    templateUrl: './BooksPage.component.html',
    styleUrls:['./BooksPage.component.css'],
})
export class BooksPageComponent {
    name = '';
    constructor(
      private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {}

    @ViewChild(booksCardClass) child:booksCardClass; 
      
      searchOnEnterPressed(): void {
        this.ng4LoadingSpinnerService.show();

        this.child.getGoogleBooksList(this.name);
        console.log("name -----"+this.name);

        setTimeout(function() {
          this.ng4LoadingSpinnerService.hide();
          console.log("Inside spinner method");
        }.bind(this), 2000);
      }
}