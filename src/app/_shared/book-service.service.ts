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
    key = 'AIzaSyAM8hl0TDbjdvhfCbxssqUZLBhdYW61HC8';
    url = "https://www.googleapis.com/books/v1/volumes";
    headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    options       = new RequestOptions({ headers: this.headers }); // Create a request option

    constructor(private http: Http){}

    getBooks(): Promise<Book[]> {
        return Promise.resolve(Books);
    }

    getGoogleBooksData(searchBookText : String): Observable<any[]> {
        var modifiedString : String = searchBookText.replace(' ', '+');
        console.log("modified string "+ modifiedString);
        return this.http.get(this.url+"?q="+modifiedString+
                                            "&maxResults=40&startIndex=100"
                                            +"&key="+this.key)
                        .map((res : Response) => res.json())
                        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}