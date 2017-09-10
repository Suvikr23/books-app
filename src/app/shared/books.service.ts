import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Book } from '../Book';
import { Books } from '../mock-books';

@Injectable()
export class BookService {
    url = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";
    headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options       = new RequestOptions({ headers: this.headers }); // Create a request option

    constructor(private http: Http){}

    getBooks(): Promise<Book[]> {
        return Promise.resolve(Books);
    }

    getGoogleBooksData(): Observable<any[]> {
        return this.http.get(this.url)
                        .map((res : Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}