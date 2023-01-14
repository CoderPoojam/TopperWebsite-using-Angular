import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarafterloginComponent } from './navbarafterlogin.component';

describe('NavbarafterloginComponent', () => {
  let component: NavbarafterloginComponent;
  let fixture: ComponentFixture<NavbarafterloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarafterloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
