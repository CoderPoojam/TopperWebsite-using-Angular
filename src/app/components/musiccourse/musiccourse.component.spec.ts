import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiccourseComponent } from './musiccourse.component';

describe('MusiccourseComponent', () => {
  let component: MusiccourseComponent;
  let fixture: ComponentFixture<MusiccourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusiccourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusiccourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
