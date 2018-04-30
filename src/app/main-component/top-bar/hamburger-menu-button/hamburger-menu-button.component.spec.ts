import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerMenuButtonComponent } from './hamburger-menu-button.component';

describe('HamburgerMenuButtonComponent', () => {
  let component: HamburgerMenuButtonComponent;
  let fixture: ComponentFixture<HamburgerMenuButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgerMenuButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
