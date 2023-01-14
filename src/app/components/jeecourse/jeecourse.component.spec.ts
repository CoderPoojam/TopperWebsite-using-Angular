import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeecourseComponent } from './jeecourse.component';

describe('JeecourseComponent', () => {
  let component: JeecourseComponent;
  let fixture: ComponentFixture<JeecourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeecourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
