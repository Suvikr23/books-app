import { Component,ViewChild } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { BookCardComponent } from '../book-card/book-card.component'

@Component({
    selector: 'books-page',
    templateUrl: './book-page.component.html',
    styleUrls:['./book-page.component.css'],
})
export class BookPageComponent {
   name = '';
    isLoadingFinished = false;
    constructor(
      private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) {}

    @ViewChild(BookCardComponent) child:BookCardComponent; 
      
      searchOnEnterPressed(): void {
        this.ng4LoadingSpinnerService.show();

        this.child.getGoogleBooksList(this.name);
        console.log("name -----"+this.name);

        setTimeout(function() {
          this.ng4LoadingSpinnerService.hide();
          this.isLoadingFinished = true;
          console.log("Inside spinner method");
        }.bind(this), 2000);
      }
}
