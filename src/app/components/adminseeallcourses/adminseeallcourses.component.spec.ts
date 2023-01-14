import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminseeallcoursesComponent } from './adminseeallcourses.component';

describe('AdminseeallcoursesComponent', () => {
  let component: AdminseeallcoursesComponent;
  let fixture: ComponentFixture<AdminseeallcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminseeallcoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminseeallcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
