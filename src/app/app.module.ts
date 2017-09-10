import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { booksCardClass } from './BookCardComponent/bookCard.component';
import { PageNotFoundClass } from './PageNotFound/pagenotfound.component';
import { BooksPageComponent } from './BooksPageComponent/BooksPage.component';
import { BooksHomeComponent } from './BooksPageComponent/BooksHome.component';

import { BookService } from './shared/books.service';

const appRoutes: Routes = [
  { path: 'books-home/books-page', component: BooksPageComponent },
  { path: 'app-root', component: AppComponent },
  { path: 'books-home', component: BooksHomeComponent},
  {
    path: '',
    redirectTo: '/books-home',
    pathMatch: 'full'
  },

  { path: '**', component: PageNotFoundClass }
];

@NgModule({
  declarations: [
    AppComponent,
    booksCardClass,
    BooksHomeComponent,
    BooksPageComponent,
    PageNotFoundClass
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    RouterModule,
    HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
