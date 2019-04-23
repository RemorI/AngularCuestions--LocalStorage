import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCuestionsComponent } from './list-cuestions.component';

describe('ListCuestionsComponent', () => {
  let component: ListCuestionsComponent;
  let fixture: ComponentFixture<ListCuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
