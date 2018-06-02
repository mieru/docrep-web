import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCartViewComponent } from './document-cart-view.component';

describe('DocumentCartViewComponent', () => {
  let component: DocumentCartViewComponent;
  let fixture: ComponentFixture<DocumentCartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentCartViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentCartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
