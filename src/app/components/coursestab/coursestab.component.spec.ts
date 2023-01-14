import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursestabComponent } from './coursestab.component';

describe('CoursestabComponent', () => {
  let component: CoursestabComponent;
  let fixture: ComponentFixture<CoursestabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursestabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursestabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
