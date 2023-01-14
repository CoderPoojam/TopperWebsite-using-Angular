import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddnewcourseComponent } from './adminaddnewcourse.component';

describe('AdminaddnewcourseComponent', () => {
  let component: AdminaddnewcourseComponent;
  let fixture: ComponentFixture<AdminaddnewcourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddnewcourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddnewcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
