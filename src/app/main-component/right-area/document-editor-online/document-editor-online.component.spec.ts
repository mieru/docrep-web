import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEditorOnlineComponent } from './document-editor-online.component';

describe('DocumentEditorOnlineComponent', () => {
  let component: DocumentEditorOnlineComponent;
  let fixture: ComponentFixture<DocumentEditorOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentEditorOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentEditorOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
