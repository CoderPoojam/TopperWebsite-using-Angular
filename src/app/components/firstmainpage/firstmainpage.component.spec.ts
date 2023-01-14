import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstmainpageComponent } from './firstmainpage.component';

describe('FirstmainpageComponent', () => {
  let component: FirstmainpageComponent;
  let fixture: ComponentFixture<FirstmainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstmainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstmainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
