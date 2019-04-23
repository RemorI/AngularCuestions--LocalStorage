import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusCuestionsComponent } from './plus-cuestions.component';

describe('PlusCuestionsComponent', () => {
  let component: PlusCuestionsComponent;
  let fixture: ComponentFixture<PlusCuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusCuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusCuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
