import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule } from '@angular/material';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { AppComponent } from './app.component';
import { PageNotFoundClass } from './PageNotFound/pagenotfound.component';
import { BookService } from './shared/book-service.service';
import { BookHomeComponent } from './book-home/book-home.component';
import { BookPageComponent } from './book-page/book-page.component';
import { BookCardComponent } from './book-card/book-card.component';

const appRoutes: Routes = [
  { path: 'home/book-page', component: BookPageComponent },
  { path: 'app-root', component: AppComponent },
  { path: 'home', component: BookHomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  { path: '**', component: PageNotFoundClass }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundClass,
    BookHomeComponent,
    BookPageComponent,
    BookCardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    RouterModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MdCardModule,
    Ng4LoadingSpinnerModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
