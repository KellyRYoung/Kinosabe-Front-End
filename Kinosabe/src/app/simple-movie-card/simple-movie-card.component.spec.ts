import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMovieCardComponent } from './simple-movie-card.component';

describe('SimpleMovieCardComponent', () => {
  let component: SimpleMovieCardComponent;
  let fixture: ComponentFixture<SimpleMovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleMovieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
