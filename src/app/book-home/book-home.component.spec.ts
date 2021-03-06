import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHomeComponent } from './book-home.component';

describe('BookHomeComponent', () => {
  let component: BookHomeComponent;
  let fixture: ComponentFixture<BookHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
