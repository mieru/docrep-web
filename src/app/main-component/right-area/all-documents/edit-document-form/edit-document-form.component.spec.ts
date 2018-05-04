import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDocumentFormComponent } from './edit-document-form.component';

describe('EditDocumentFormComponent', () => {
  let component: EditDocumentFormComponent;
  let fixture: ComponentFixture<EditDocumentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDocumentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDocumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
