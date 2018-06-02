import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageLocationMenagerComponent } from './storage-location-menager.component';

describe('StorageLocationMenagerComponent', () => {
  let component: StorageLocationMenagerComponent;
  let fixture: ComponentFixture<StorageLocationMenagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageLocationMenagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageLocationMenagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
