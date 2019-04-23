import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionComponent } from './cuestion.component';

describe('CuestionComponent', () => {
  let component: CuestionComponent;
  let fixture: ComponentFixture<CuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
