import { Injectable } from '@angular/core';

@Injectable()
export class PageHelperService {

  constructor() { }

  isScrolledIntoViewArea(el) : boolean {
    var elTop = el.getBoundingClientRect().top;
    var elBottom = el.getBoundingClientRect().bottom;
    
    return (elTop >= 0 && elBottom <= window.innerHeight);
  }
}
