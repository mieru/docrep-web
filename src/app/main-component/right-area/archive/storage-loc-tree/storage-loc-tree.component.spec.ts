import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageLocTreeComponent } from './storage-loc-tree.component';

describe('StorageLocTreeComponent', () => {
  let component: StorageLocTreeComponent;
  let fixture: ComponentFixture<StorageLocTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageLocTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageLocTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
